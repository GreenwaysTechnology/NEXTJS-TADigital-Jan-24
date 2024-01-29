
//write a function to fetch data 
export async function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(url);
    return response.json()
}

export default async function TodosPage() {
    const todos = await fetchTodos();

    return <>
        <h1>Todos Page</h1>
        <ul>
            {
                todos.map(todo => {
                    return <li>{todo.title}</li>
                })
            }
        </ul>
    </>
}