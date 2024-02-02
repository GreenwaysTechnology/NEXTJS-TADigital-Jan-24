import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
//Mock data
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
];
const ADDRESS = [{
        city: 'Coimbatore',
        state: 'TN',
        id: 1 //linking field
    },
    {
        city: 'BNG',
        state: 'KA',
        id: 2 //linking field
    },
    {
        city: 'HYD',
        state: 'TS',
        id: 3 //linking field
    }];
//Define schema
const typeDefs = `

type User {
   id:ID!
   name:String
   email:String
   address:Address
}
type Address{
    city:String
    state:String
}
type Query {
    users:[User]
}
`;
//Define Resolver: biz logic
const resolvers = {
    //Query Implmentation
    Query: {
        users() {
            //return object
            return USERS;
        },
    },
    //Resolver Chain
    User: {
        address(parent, args, contextValue, info) {
            console.log(parent);
            //connect parent with child: connect this address with user 
            return ADDRESS.find(address => {
                //linking field === parent field
                return address.id === parent.id;
            });
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
