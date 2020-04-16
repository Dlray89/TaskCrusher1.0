import React from "react"
import Task from "./Task"
import { useQuery } from "urql"
import gql from "graphql-tag"


//holds my queries
const FEED_QUERY = gql `
{
    feed {
        tasks {
            id
            taskName
            description
        }
    }
}
`

const TaskList = () => {
    //result tells me more abou the state of my query
    const [result] = useQuery({ query: FEED_QUERY})
    const { data, fetching, error } = result

    //is true as long as the request is still going and response hasnt been recieved
    if (fetching) return <div>Fetching</div>

    if (error) return <div>Error</div>

    //this is actual data
    const tasksToRender = data.feed.tasks
    //pass FEED_QUERY to the query option
   

    return (
        <div>
            {tasksToRender.map(task => <Task key={task.id} task={task} /> )}
        </div>
    )
    }

export default TaskList