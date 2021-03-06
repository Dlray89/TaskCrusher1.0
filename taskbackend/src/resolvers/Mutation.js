const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { APP_SECRET, getUserId } = require("../utils")



async function signup(parent, args, context, info) {
//encrypt user password here
    const hashPassword = await bcrypt.hash(args.password, 10)
//store user to prisma client
    const { password, ...user } = await context.prisma.createUser({
        ...args, password: hashPassword
    })

//generate a jwt and sign it with an APP_SECRET
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

//return token and user
    return {
        token,
        user
    }
}

async function login(parent, args, context, info){
//retrieve exisiting user by email
    const {password, ...user} = await context.prisma.user({ email: args.email})
    //no user was found with email return error message
    if (!user) {
        throw new Error("no such user exsist")
    }
//compare password with the one in database
    const valid = await bcrypt.compare(args.password, password)
    //if they dont match send error 
    if(!valid) {
        throw new Error("invaild Password")
    }

    const token = jwt.sign({ userId: user.id}, APP_SECRET)
    return {
        token,
        user,
    }

}

function post(parent,args,context,info) {
    const userId = getUserId(context)
    return context.prisma.createTask({
        taskName: args.taskName,
        description: args.description,
        postedBy: { connect: {id: userId } },
    })
}

async function vote(parent, args, context, info) {

//1
    const userId = getUserId(context)

    //2
    const voteExists = await context.prisma.$exists.vote({
        user: { id: userId},
        link: { id: args.taskId },
    })
    if (votedExists) {
        throw new Error(`Already voted for task: ${args.taskId}`)
    }

    //3
    return context.prisma.createVote({
        user: { connect: { id: userId } },
        task: { connect: {id: args.linkId } },
    })
}

module.exports = {
    signup,
    login,
    post,
    vote,
}