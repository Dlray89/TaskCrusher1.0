import React from "react";
import List from "./components/List"
import Navbar from "./CompTools/navbar.js"

import { TextField, Button, withStyles, Card } from "@material-ui/core"
import "./App.css"


const styles = theme => ({
    main:{
        background:"white",
        height:"100%",
        margin:"0"
    },
    root:{
        textAlign:"center",
        width:"90%",
        margin:"2% auto",
        padding:"2%",
        background:"#e4e5e6"
    },
    headerIMG:{
        width:'100px',
        [theme.breakpoints.down("sm")]: {
            width:"40vw"
        }
    },
    button:{
        background:"linear-gradient(to top, #00416a, #e4e5e6)",
        marginTop:"1.5%"
    },
    input:{
        textAlign:"center"
    }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[
          "Start a react project",
          "Practice Javascript problems",
          "Build a back-end using GRAPHQL",
          "Go to the Movies",
      ],
      tags:[
          "React",
          "Javascript",
          "Node",
          "Life"
      ]

      
    };
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this)
  }

  addItem(e) {
    e.preventDefault();

    //creating variables for our list
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    //if the input has a value
    if (newItem.value !== "") {
      //add new items to the end og our list
      list.push(newItem.value);
      //then i use this to set the state
      this.setState({
        list: list
      });
      //reseting form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      //if it doesmt have a value make the border red
      newItem.classList.add("is-danger");
    }
  }

  remove(item) {
    //put our list into an array
    const list = this.state.list.slice();

    //check to see if items matches list items
    list.some((el, i) => {
      if (el === item) {
        //if item amtaches remove from the array
        list.splice(i, 1);
        return true
      }

    });
    //set state to list
    this.setState({
      list: list
    });
  }

  render() {
      const {classes} = this.props
    return (
        <div className={classes.main}>
            
            <header className='header'>
           
            </header>
            <Navbar />
      <Card className={classes.root}>
        <div>
          <section>
            <List items={this.state.list} tag={this.state.tags} delete={this.remove} />
          </section>
          <hr />
          <section>
            <form className="ItemForm" id="addItemForm">
              <TextField
              variant="outlined"
                id="addInput"
                type="text"
                className={classes.input}
                label="Add something"
              />
              <br/>
              <Button variant="contained" color="secondary" className={classes.button} onClick={this.addItem}>
                Add Item
              </Button>
            </form>
          </section>
        </div>
      </Card>
      </div>
    );
  }
}
export default withStyles(styles, {withTheme:true})(App);
