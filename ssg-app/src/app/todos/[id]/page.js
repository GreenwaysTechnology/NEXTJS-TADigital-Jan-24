export async function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(url)
    return response.json()
}

export default function TodosDetailsPage(props) {
    return <div>
        <h1> {props.params.id} - Todos Details Page</h1>
    </div>
}

//generateStaticParams method 

export async function generateStaticParams() {
    //this method must return array
    console.log('building')
    const todos = await fetchTodos()
    //generate html pages for all todos:if you have 100 records, 100 html file would be generated
    return todos.map(todo => {
        //based on id only the pages are generated,id value must be string
        let id = todo.id.toString()
        return {
            id: id
        }
    })
}