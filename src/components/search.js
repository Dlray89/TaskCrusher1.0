import React from "react"
import { useQuery } from "urql"
import gql from "graphql-tag"
import Task from "./Task"

const FEED_SEARCH_QUERY = gql `
query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
        tasks {
            id
            taskName
            description
        }
    }
}
`


const Search = () => {
    const [filter, setFilter] = React.useState('')

    const [result, executeQuery] = useQuery({
        query: FEED_SEARCH_QUERY,
        variables: { filter },
        pause: true
    })


    const search = React.useCallback(() => {
        executeQuery();
    }, [executeQuery]);
    
    const tasks = result.data ? result.data.feed.tasks : []

    return(
        <div>
            <input type="text"
            onChange={e => setFilter(e.target.value)} />
            <button onClick={search}>search</button>
        
        {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
        ))}
        </div>
    )
}

export default Search