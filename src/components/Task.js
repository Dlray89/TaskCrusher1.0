import React from "react"

const Task = ({ task }) => (
    <div>
        <div>
            {task.taskName} ({task.description})
        </div>
    </div>
)

export default Task