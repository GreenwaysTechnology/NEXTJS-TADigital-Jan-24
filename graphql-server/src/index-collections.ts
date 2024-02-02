import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'

export const USERS: Array<any> = [{
    id: 1,
    firstName: 'Subramanian',
    lastName: 'Murugan',
    age: 10,
    points: 10.5,
    status: true

},
{
    id: 2,
    firstName: 'Geetha',
    lastName: 'Subramanian',
    age: 34,
    points: 10.5,
    status: true

},
{
    id: 3,
    firstName: 'Murugan',
    lastName: 'Palanisamy',
    age: 58,
    points: 10.5,
    status: true

}
]

//Define schema
const typeDefs = `
#Simple Query which returns Hello World
 
 type User {
    id:ID
    firstName:String
    lastName:String
    age:Int
    points:Float
    status:Boolean
 }

 type Query {
   users:[User]
 }
`
//Define Resolver: biz logic
const resolvers = {
    //Query Implmentation
    Query: {
        users() {
            //return object
            return USERS
        }
    }
    //Mutation

    //Subscription
}

//create instance of ApolloServer and pass schema , resolver as config

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})
console.log(`Apollo Server is Ready at ${url}`)
