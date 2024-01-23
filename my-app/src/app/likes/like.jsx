// 'use client'
import { useState } from "react"

export const Like = () => {
    const [like, setLike] = useState(0)
    const onLike = () => {
        console.log('Like')
        setLike(like + 1)
    }
    return <div>
        <h1>Like {like}</h1>
        <button onClick={onLike}>Like</button>
    </div>
}