'use client'

import { useState } from "react"

const url = `http://localhost:3000`

export default function InvoiceHome() {
    
    const [value, setValue] = useState('')

    const create = async (ev) => {
        ev.preventDefault()
        console.log(ev.target.name.value)
        //make api call
        const res = await fetch(`${url}/api/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: ev.target.name.value
            })
        })
        console.log(res)
    }
    const handleChange = (event) => {
        setValue(event.target.value);

    }

    return <div>
        <h1>Invoice Form</h1>
        <form onSubmit={create}>
            <input type="text" value={value} name="name" onChange={handleChange} />
            <input type="submit" />
        </form>
    </div>
}
