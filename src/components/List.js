import React from "react";
import {TextField, Button, withStyles} from "@material-ui/core"


const styles = theme => ({
    root:{
        color:"green"
    },
    input:{
        color:"red",
        margin:"0% 0 3% 0"
    },
    taskCards:{
        border:"solid 2px white",
        textAlign:"center",
        fontSize:"2rem",
        width:"30%",
        margin:"2% auto",
        padding:"3%",
        [theme.breakpoints.down("sm")]:{
            width:"80%"
        }
    }
})



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
    filtered: nextProps.items
  })
  }


 handleChange(e) {
    //variable to hold original version of the list
    let currentList = [];
    //hold the filter list before putting into list
    let newList = [];

    //if the search bar isn't empty
    if (e.target.value !== "") {
      //assign original list to current lst
      currentList = this.props.items;
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        //change current items into lowercase
        const lc = item.toLowerCase();
        //change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
      const {classes} = this.props
    return (
      <div>
        <section>
          <TextField  type="text" variant="outlined" color="secondary" className={classes.input} label="Search..." onChange={this.handleChange}/>
        </section>
        <div>
          {this.state.filtered.map(item => (
            <div className={classes.taskCards} key={item}>
              {item} <br />
              <Button
                className="delete"
                variant="contained" 
                onClick={() => this.props.delete(item)}
              >
                remove
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default withStyles(styles, {withTheme:true})(List);
