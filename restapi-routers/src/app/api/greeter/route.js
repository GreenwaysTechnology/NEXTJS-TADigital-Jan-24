// routers 

import { NextResponse } from "next/server";

export async function GET(request) {
    //return response
    return NextResponse.json({ message: 'hello' })
}
//post 
export async function POST(request) {
    //read body 
    const payload = await request.json()
    console.log(payload)
    return NextResponse.json({ message: 'saved' })
}