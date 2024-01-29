
import { NextResponse } from "next/server";

//const url = `https://jsonplaceholder.typicode.com/albums`
const url = `${process.env.ALBUMS_URL}/albums`


//GET ALBUM BY id
export async function GET(request, { params }) {
    const id = params.id
    const response = await fetch(`${url}/${id}`)
    const album = await response.json()
    return NextResponse.json(album)
}

//UPDATE Album by id 
export async function PUT(request, { params }) {
    //const album = await request.json()
    const { title } = await request.json()
    const id = params.id
    const res = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    })
    const updatedAlbum = await res.json()
    return NextResponse.json(updatedAlbum)
}

//DELETE Albumb by id :
export async function DELETE(request, { params }) {
    const id = params.id
    const res = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    const deletedAlbum = await res.json()
    return NextResponse.json(deletedAlbum)
}