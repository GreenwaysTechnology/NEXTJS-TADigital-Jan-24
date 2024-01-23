"use client"

import { useState } from "react"
//user server component
import { Dislike } from "./dislike"

export const MyReview = props => {
    const [like, setLike] = useState(0)
    const onLike = () => {
        console.log('Like')
        setLike(like + 1)
    }
    return <div>
        <h1>Like {like}</h1>
        <button onClick={onLike}>Like</button>
        <Dislike />
    </div>
}