import React from "react"
import {Switch, Route} from "react-router-dom"
import TaskList from "./components/taskList"
import Header from "./components/Header"
import CreateTask from "./components/CreateTask"
import Login from "./components/Login"


const App = () => (
    <div>
        <Header />
        <div>
            <Switch>
                <Route exact path="/" component={TaskList} />
                <Route exact path="/create" component={CreateTask} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    </div>
)


export default App