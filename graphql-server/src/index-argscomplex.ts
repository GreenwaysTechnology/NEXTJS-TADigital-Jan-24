import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

//Define Schema
const typeDefs = `
type User {
 id:ID!
 name:String
 email:String
}

type Query {
  users:[User]
  user(id:ID!):User
}

input UserInput{
    id:ID!
    name:String
    email:String
}
type Mutation {
   createUser(userInput:UserInput):User
}
`
const USERS = [{
    id: 1,
    name: 'A',
    email: 'a@gmail.com'
},
{
    id: 2,
    name: 'B',
    email: 'b@gmail.com'
},
{
    id: 3,
    name: 'C',
    email: 'c@gmail.com'
}

]
//Define Resolver
const resolvers = {
    //Query
    Query: {
        users() {
            return USERS
        },
        user(_, args) {
            return USERS.find(user => user.id === +args.id)
        }
    },
    //Mutation
    Mutation: {
        //add new User
        createUser(_, args) {
            //call api to insert users or call api to insert users into db using prisma
            USERS.push(args.userInput)
            console.log(args.userInput)
            return args.userInput
        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})
//start the webserver and deploy
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})
console.log(`Apollo Server is Ready at ${url}`)
