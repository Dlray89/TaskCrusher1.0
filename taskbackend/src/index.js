const { GraphQLServer } = require("graphql-yoga");



let Links = [{
    id: 1,
    url:"www.dapthedev.com",
    description: "Dapper Dave tech site"
},
{
    id:2,
    url:"facebook.com",
    description:"Social media"
}]

//generate new ids for links
let idCount = Links.length

//2 implementation of the schema
const resolvers = {
    Query:{
        info: () => null,
        feed: () => Links
    },
    //create new data using mutation
    Mutation:{
        post: (parent, args) => {
            //create a new object of Link
            const link = {
                id:`link-${idCount}`,
                description: args.description,
                url: args.url,
            }
            //push new links into Links
            Links.push(link)
            return link
        }
    },

}
//start server and assign to GraphQLServer
//assign typeDefs and resolvers
const server = new GraphQLServer({
    typeDefs:"./src/schema.graphql",
    resolvers
})
server.start(() => console.log(`server is running on localhost:4000`))
