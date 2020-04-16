import React from "react"
import gql from "graphql-tag"
import { useMutation} from "urql"
import { setToken } from "../token"

const SIGNUP_MUTATION = gql `
mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
        token
    }
}
`

const LOGIN_MUTATION = gql `
mutation LoginMutation($email: String!, $password: String!) {
    login(email:$email, password: $password) {
        token
    }
}
`


const Login = props => {

    const [isLogin, setIsLogin] = React.useState(true)

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    //used to switch between login and signup
const [state, executeMutation] = useMutation(
    isLogin ? LOGIN_MUTATION
     : SIGNUP_MUTATION   
);

const mutate = React.useCallback(()=> {
    executeMutation({email, password, name})
    .then(({data}) => {
        const token = data && data[isLogin ? "login" : "signup"].token
        if(token) {
            setToken(token)
            props.history.push("/")
        }
    })
}, [executeMutation, props.history, isLogin, email, password, name])

    return(
        <div>
        <h4>{isLogin ? "login" : "Sign Up"}</h4>

        <div>
            {!isLogin && (
                <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                 />
            )}
             <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Your Email address"
                 />
                  <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Choose a safe password"
                 />
        </div>
        <div>
            <button disabled={state.fetching} onClick={mutate} type="button">{isLogin ? "login" : "create account"}</button>
            <button disabled={state.fetching} type="button" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Need to create an account" : "Already have an account"}
            </button>
        </div>
        </div>
    )
}

export default Login