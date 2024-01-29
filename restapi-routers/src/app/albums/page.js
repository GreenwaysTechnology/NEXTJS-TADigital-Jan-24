
export async function fetchAlbums() {
    //const url = 'https://jsonplaceholder.typicode.com/todos'
    const url = `${process.env.HOST}/albums`
    const response = await fetch(url);
    return response.json()
}
export default async function AlbumsPage() {
    const albums = await fetchAlbums();

    return <>
        <h1>Albums Page</h1>
        <ul>
            {
                albums.map(album => {
                    return <li>{album.title}</li>
                })
            }
        </ul>
    </>
}