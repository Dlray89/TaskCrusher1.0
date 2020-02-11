import React from "react";
import ToDoForm from "./components/TodoForm";
import "./App.css";

class App extends React.Component{
  render() {
    return(
    <div>
    <h1>Welcome to your List!</h1>
    <p>Plan your day to get started
      <li>ADD TASK</li>
      <li>DELETE TASK</li>
      <li>EDIT TASK</li>
    </p>
    <div><ToDoForm />
    </div>
   
    </div>
    )
  }
}

export default App