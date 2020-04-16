async function feed(root, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contains: args.filter },
            { taskName_contains: args.filter }
        ],
    } : {}

    const tasks = await context.prisma.tasks({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
    })
    //retrive that total number of task elements
    const count = await context.prisma.tasksConnection({
        where,
    })
    .aggregate()
    .count()
    return {
        tasks,
        count
    }
    
}

module.exports = {
    feed,
}