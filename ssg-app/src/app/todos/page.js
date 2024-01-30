//Master page

import Link from "next/link";

export async function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(url)
    return response.json()
}

export default async function TodosPage() {
    const todos = await fetchTodos();
    return <div>
        <ul>
            {
                todos.map(todo => {
                    return <>
                        <li>
                            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                        </li>
                    </>
                })
            }
        </ul>
    </div>
}