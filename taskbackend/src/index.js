const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("../prisma/src/generated/prisma.client")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Link = require("./resolvers/Link")
const User = require("./resolvers/User")



async function main(){
prisma.$exists

//create a new link here
    const newLink = await prisma.createLink({
        url:'kjnknkl.com',
        description: 'dslkmcdsklmzkds',
    })
    console.log(`Create new link: ${newLink.url} (ID:${newLink.id}) `)


    //read all links here
    const allLinks = await prisma.links()
    console.log(allLinks)
    main().catch(e => console.error(e))

}


const resolvers = {
    Query,
    Mutation,
    Link,
    User

}
//start server and assign to GraphQLServer
//assign typeDefs and resolvers
//adding context to prisma
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context: request => {
        return{
            ...request,
            prisma,
        }
    }
})
server.start(() => console.log(`server is running on localhost:4000`))
