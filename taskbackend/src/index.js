const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("../prisma/src/generated/prisma.client")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Task = require("./resolvers/Task")
const User = require("./resolvers/User")
const Subscription = require("./resolvers/Subscription")
const Vote = require("./resolvers/Votes")



async function main(){
prisma.$exists

//create a newtask here
    const newTask = await prisma.createTask({
        taskName:'kjnknkl.com',
        description: 'dslkmcdsklmzkds',
    })
    console.log(`Create new task: ${newTask.taskName} (ID:${newTask.id}`)
    const allTasks = await prisma.tasks()
    console.log(allTasks)
    main().catch(e => console.error(e))

}


const resolvers = {
    Query,
    Mutation,
    Subscription,
    Task,
    User,
    Vote,

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
