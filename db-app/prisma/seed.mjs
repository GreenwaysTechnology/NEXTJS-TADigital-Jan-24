import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'admin',
            email: 'admin@gmail.com',
            role: 'admin'
        },
    })
    console.log('created', user)
}
main().then(() => prisma.$disconnect()).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit()
})