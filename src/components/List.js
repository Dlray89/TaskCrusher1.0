import React from "react";
import {TextField, withStyles, Avatar, Card} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import "./list.css"
import AO from "../CompTools/advanceOptions"


const styles = theme => ({
    root:{
        color:"green"
    },
    input:{
        color:"red",
        
        margin:"0% 0 3% 0"
    },
    Avatar:{
        margin:"0% auto",
        marginBottom:"10%",
        background:"linear-gradient(to top, #00416a, #e4e5e6)",
        color:"#e4e5e6",
    },
    taskCards:{
        border:"solid 1px black",
        background:"linear-gradient(to top, #00416a, #e4e5e6)",
        color:"#e4e5e6",
        textAlign:"center",
        fontSize:"1.5rem",
        width:"20%",
        margin:"2% auto",
        padding:"1%",
        [theme.breakpoints.down("sm")]:{
            width:"40%",
            fontSize:"0.9rem"
        }
    },
    taskContainer:{
        display:"flex",
        background:"inherit",
        alignItem:"center",
        textAlign:"center",
        flexWrap:"wrap"
    },
    Tags:{
        border:"solid 1px black",
        width:"10%",
        display:"flex",
        flexWrap:"wrap",
        padding:".5%",
        justifyContent:"space-evenly",
        alignItems:"center",
        margin:"0 auto",
        textAlign:"center",
        [theme.breakpoints.down("sm")]: {
            width:"23%",
            margin:"0 auto"
        }
    }
})



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
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
    filtered: nextProps.items,
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
          <TextField  type="text" variant="outlined" color="secondary" className={classes.input} label="Search..." onChange={this.handleChange} />
          <AO />
        </section>
        <div className={classes.taskContainer}>
       
          {this.state.filtered.map(item => (
            <Card className={classes.taskCards} key={item}>
             <Avatar className={classes.Avatar}>T</Avatar>
              <p>Task Name: <br /> {item}</p>
              <DeleteIcon
                className="delete"
                variant="contained" 
                onClick={() => this.props.delete(item)}
              />
             
            </Card>
          ))}
      </div>
      </div>
    );
  }
}
export default withStyles(styles, {withTheme:true})(List);
