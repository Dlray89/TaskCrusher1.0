const jwt = require("jsonwebtoken")

//used to sign the jwt
const APP_SECRET = "Serect server"


//
function getUserId(context) {
//retrieve auth header
    const Authorization = context.request.get("Authorization")
    if (Authorization) {
        const token = Authorization.replace("Bearer ", "")
        const { userId } = jwt.verify(token, APP_SECRET)
        return userId
    }
    throw new Error("Not Authenticated")
}

module.exports = {
    APP_SECRET,
    getUserId,
}