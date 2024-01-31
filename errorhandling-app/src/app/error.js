'use client';
import { useEffect } from "react";

//Error Component must be client component

export default function Error(props) {
    //error reporting
    useEffect(() => {
        //log error into error reporting service
        console.error(error)
    }, [props.error])
    console.log(props)
    return <div>
        <h2>Something went wrong</h2>
        <h3>{props.error.message}</h3>
        <button onClick={() => {
            props.reset()
        }}>Try Again</button>
    </div>
}