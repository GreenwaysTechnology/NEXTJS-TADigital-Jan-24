import { NextResponse } from "next/server"

//const url = 'https://jsonplaceholder.typicode.com/albums'
const url = `${process.env.ALBUMS_URL}/albums`

//GET ALL albums
export async function GET(request) {
    const response = await fetch(url)
    const albums = await response.json()
    return NextResponse.json(albums)
}

//POST 
export async function POST(request) {

    const album = await request.json()
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)
    })
    const newAlbum = await res.json()
    return NextResponse.json(newAlbum)
}