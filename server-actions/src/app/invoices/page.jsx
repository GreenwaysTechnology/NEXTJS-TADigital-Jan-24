import { redirect } from "next/navigation"


const url = `http://localhost:3000`

export default function InvoiceHome() {

    const create = async (formData) => {
        'use server'
        const expensesName = formData.get('expensesName')
        console.log("expenses", expensesName)
        const res = await fetch(`${url}/api/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: expensesName
            })
        })
        //you can mutate data: you can update /insert data into database
        //invalidate cache
        redirect("/success")
    }

    return <div>
        <h1>Invoice Form</h1>
        <form action={create}>
            <input type="text" name="expensesName" placeholder="Add an Expenses" required />
            <input type="submit" />
        </form>
    </div>
}
