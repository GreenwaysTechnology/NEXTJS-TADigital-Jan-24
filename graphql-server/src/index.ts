import { RESTDataSource } from "@apollo/datasource-rest"
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

//type class 
export class Book {
    title: string;
    author: string;
}

export class BooksAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = "http://localhost:8080/"
    }
    //apis:biz api
    async getBooks() {
        //http://localhost:3000/books
        return this.get<Book[]>(`books`)
    }
    //save book
    async postBook(book) {
        return this.post<any>(`books`, book).then(resp => resp.data)
    }
}

//Context Type:
interface ContextValue {
    dataSources: {
        booksAPI: BooksAPI
    }
}
//Define Schema
const typeDefs = `
type Book {
    title:String
    author:String
}

type Query {
    "GET all Books from the Rest api server"
    books:[Book!]
}

`

//Define Resolver
const resolvers = {
    //Query
    Query: {
        async books(parent, args, contextValue, info) {
            const { dataSources } = contextValue
            return dataSources.booksAPI.getBooks()
        }
    }
}
const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
})

//start the webserver and deploy
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    },
    context: async () => {
        return {
            dataSources: {
                booksAPI: new BooksAPI()  // dataSources.booksAPI.getBooks()
            }
        }
    }
})