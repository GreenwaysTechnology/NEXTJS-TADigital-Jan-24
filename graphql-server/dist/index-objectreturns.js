import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
//Define schema
const typeDefs = `
 type User {
    id:ID
    firstName:String
    lastName:String
    age:Int
    points:Float
    status:Boolean
 }
 type Query {
   user:User
 }
`;
//Define Resolver: biz logic
const resolvers = {
    //Query Implmentation
    Query: {
        user() {
            //return object
            return {
                id: 1,
                firstName: 'Subramanian',
                lastName: 'Murugan',
                age: 10,
                points: 10.5,
                status: true
            };
        }
    }
    //Mutation
    //Subscription
};
//create instance of ApolloServer and pass schema , resolver as config
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
});
console.log(`Apollo Server is Ready at ${url}`);
