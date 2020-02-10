import React, { Component } from "react";

class ToDoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }

    handleChanges = event => {
        this.setState({
            newTask: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewtask(this.state.newtask);
        this.setState({ newTask: '' });
    }

    render() {
        console.log('render form');
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='newTask'
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                />
                <button> Add Task </button>
            </form>
        )

    }

}

export default ToDoForm;