import React from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";


class App extends React.Component{
  render() {
    return(
    <div>
    <h1>To do List</h1>
    <div><ToDoForm />
    </div>
   
    </div>
    )
  }
}

export default App