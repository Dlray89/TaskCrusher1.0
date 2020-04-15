function task(parent, args, context) {
    return context.prisma.vote({ id: parent.id}).task()
}

function user(parent, args, context) {
    return context.prisma.vote({ id: parent.id}).user()
}

module.exports = {
    task,
    user,
}