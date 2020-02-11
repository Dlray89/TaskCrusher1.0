import React from "react";
import ListItems from "./ListItems";


class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this)
        this.deleteItems = this.deleteItems.bind(this)
        this.setUpdate = this.setUpdate.bind(this)
    }

    handleInput(e){
        this.setState({ 
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    addItem(e) {
        e.preventDefault();

        const newItem = this.state.currentItem;

        if(newItem.text !=='') {
            const newItems = [...this.state.items, newItem]
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    deleteItems(key){
        const fliterItems = this.state.items.filter(item => 
            item.key !== key);
            this.setState({
                items: fliterItems
            })
           
    }

    setUpdate(text, key){
        const items = this.state.items;
        items.map( item => {
            if(item.key === key){
                item.text = text;
                this.setState({
                    items: items
                })
            }
        })
    }
    render() {
        return (
            <div>
            <header>
                <form onSubmit={this.addItem}>
                    <input  type="text" placeholder="Add task" value={this.state.currentItem.Text} onChange={this.handleInput}/>
                    <button type="submit"> Add</button>
                </form>
                <ListItems items={this.state.items} deleteItems={this.deleteItems} setUpdate={this.setUpdate}></ListItems>

            </header>
            </div>
        )
    }
}

export default ToDoForm;