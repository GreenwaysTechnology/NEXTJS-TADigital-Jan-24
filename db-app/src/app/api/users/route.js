import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


//read all users
export async function GET() {
    const users = await prisma.user.findMany({})
    if (!users) {
        return NextResponse.json({ message: 'No Users Found', code: 404 })
    } else {
        return NextResponse.json(users)
    }
}
//create new User 
export async function POST(request) {
    try {
        const json = await request.json()
        const user = await prisma.user.create({
            data: json
        })
        return new NextResponse(JSON.stringify(user), {
            status: 201, headers: {
                "Content-Type": "application/json"
            }
        })
    }
    catch (err) {
        return new NextResponse(err.message, { statuscode: 500 })
    }
}