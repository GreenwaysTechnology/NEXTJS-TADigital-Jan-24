// routers 

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    console.log(params)
    //return response
    return NextResponse.json({ message: params.message })
}