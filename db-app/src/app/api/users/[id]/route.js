import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


//Get User by id
export async function GET(request, { params }) {
    const id = Number(params.id)

    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    if (!user) {
        return NextResponse.json({ message: `No User Found with ID ${id}`, code: 404 })
    } else {
        return NextResponse.json(user)
    }
}

export async function PATCH(request, { params }) {
    try {
        const id = Number(params.id)
        const user = await request.json()
        const updatedUser = await prisma.user.update({
            where: { id },
            data: user
        })
        if (!updatedUser) {
            return NextResponse.json({ message: `No User Found with ID ${id}`, code: 404 })
        }
        return NextResponse.json(updatedUser)

    } catch (err) {
        if (error.code === "P2002") {
            return new NextResponse("User with ID already Exist", { statuscode: 409 })
        }
        return new NextResponse(err.message, { statuscode: 500 })
    }
}

//delete 
export async function DELETE(request, { params }) {
    try {
        const id = Number(params.id)
        if (!id) {
            return NextResponse.json({ message: `No User Found with ID ${id}`, code: 404 })
        } else {
            await prisma.user.delete({
                where: {
                    id
                }

            })
            return new NextResponse(null, { status: 204 })
        }


    }
    catch (err) {
        return new NextResponse(err.message, { statuscode: 500 })
    }
}

