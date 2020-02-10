// your components will all go in this `component` directory.
import React from "react";
import ToDo from "./Todo";



const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.toDo.map(item => (
                <ToDo key={item.id} item={item} selectedItem={props.selectItem }/>
            ))}
            <button onClick={props.clearCompleted}> Clear Task </button>
        </div>
    )
}
export default TodoList;
