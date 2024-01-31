
export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    //here we return promise
    return posts;
}


export default function PostsDetailsPage({ params: { id } }) {
    return <div>
        <h1>{id} details</h1>
    </div>
}

//dynamic meta data 

export async function generateMetadata({ params, searchParams }, parent) {
    const id = Number(params.id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()

    //return meta data 
    return {
        title: `Post-${post.id}`
    }

}