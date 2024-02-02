import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'

//Define schema
const typeDefs = `
 type Query {
     hello(name:String):String
 }
`
//Define Resolver: biz logic
const resolvers = {
    //Query Implmentation
    Query: {
        hello(parent, args, contextValue, info) {
            console.log(args)
            const { name } = args
            // return `Hello ${args.name}`
            return `Hello ${name}`
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
