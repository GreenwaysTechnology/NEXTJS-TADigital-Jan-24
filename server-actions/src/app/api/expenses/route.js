import { NextResponse } from "next/server"
export async function POST(request, { params }) {
    //read body 
    const payload = await request.json()
    console.log(payload)
    return NextResponse.json({ payload })
}