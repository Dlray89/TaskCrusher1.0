function postedBy(parent, args, context) {
    return context.prisma.task({ id: parent.id}).postedBy()
}

module.exports = {
    postedBy,
}