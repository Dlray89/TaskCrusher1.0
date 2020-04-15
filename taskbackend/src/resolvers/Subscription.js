function newTaskSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.task({ mutation_in: ['CREATED'] }).node()
}

const newTask = {
    subscribe: newTaskSubscribe,
    resolve: payload => {
        return payload
    }
}

function newVoteSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED']}).node()
}

const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => {
        return payload
    }
}
module.exports = {
    newTask,
    newVote
}