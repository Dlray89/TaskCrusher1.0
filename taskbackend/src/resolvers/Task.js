function postedBy(parent, args, context) {
    return context.prisma.task({ id: parent.id}).postedBy()
}

function votes(parent, args, context) {
    return context.prisma.task({id: parent.id}).vote()
}

module.exports = {
    postedBy,
    votes
}