import React from "react"
import { useMutation } from "urql"
import gql from "graphql-tag"


//define mutation
const POST_MUTATION = gql `
mutation PostMutation($taskName: String!, $description: String!) {
    post(taskName: $taskName, description: $description) {
        id
        taskName
        description
        postedBy {
            id
            name
        }
        votes {
            id
            user {
                id
            }
        }
    }
}
`

const CreateTask = props => {
    const [ taskName, setTaskName] = React.useState('')
    const [ description, setDescription] = React.useState('')

    //use the useMutation hook taht accepts the new mutation and return the current state of the mutation
    const [state, executeMutation] = useMutation(POST_MUTATION)
    const submit = React.useCallback(() => {
        executeMutation({ taskName, description})
        props.history.push("/")
    }, [executeMutation, taskName, description, props.history])


return(
    <div>
        <div>
            <input
             className="input"
             value={taskName}
             onChange={e => setTaskName(e.target.value)}
             type="text"
             placeholder="Task Name"  />

             <input
             className="input"
             value={description}
             onChange={e => setDescription(e.target.value)}
             type="text"
             placeholder="Task Description"  />
        </div>
        <button onClick={submit} disabled={state.feteching}>Submit</button>
    </div>
)
}
export default CreateTask