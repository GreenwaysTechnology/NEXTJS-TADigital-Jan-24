import FetchPost from "./components/PostClient"
import FetchPostsUsingSWR from "./components/PostClientUsingSWR"

export default function PostPage() {
    return <div>
        <h1>Post Page</h1>
        {/* Using fetch api */}
        {/* <FetchPost /> */}
        <FetchPostsUsingSWR />
    </div>
}