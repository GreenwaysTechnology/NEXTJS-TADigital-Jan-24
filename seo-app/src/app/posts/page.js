import Link from "next/link";

//meta data
export const metadata = {
    title: 'Post Master Page'
}


export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    //here we return promise
    return posts;
}



export default async function PostsPage() {
    const posts = await fetchPosts()
    return <>
        <h1>Posts Master Page</h1>
        {/* Prepare dynamic menu */}
        <ul>
            {
                posts.map(post => {
                    return <li>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                })
            }
        </ul>
    </>
}