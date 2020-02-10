import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";


const toDo = [
  {
    task: "Do react project",
    id: 10,
    completed: false 
  },
  {
    task: "Do react project",
    id: 20,
    completed: false 
  },
  {
    task: "Do react project",
    id: 30,
    completed: false 
  },
  {
    task: "Do react project",
    id: 40,
    completed: false 
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDo
    }

  }

  toggleTask = clickedId => {

    const newToDoList = this.state.toDoList.map(todo => {

      if( todo.id === clickedId ) {

        return {
          ...todo,
          completed: !todo.completed
        };

      }    else {
        return todo
      }
    })

    this.setState({
      toDoList: newToDoList
    })
  };

  addNewtask = itemTask => {
    
    const newTask = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDoList: [...this.state.toDoList, newTask]
    });
  };


  render() {
    console.log('rendering....')
    return (
      <div className='app'>
        <div className='header'>
        <h2>To do list</h2>
        <ToDoForm  addNewtask={this.addNewtask}/>
        </div>
        <ToDoList 
        toDo={this.state.toDoList}
        toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
