import React from "react"
import {Card, TextField, withStyles} from "@material-ui/core"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Styles = theme => ({
    root:{
        border:"solid 2px red"
    },
    Tags:{
        border:"solid 1px black",
        width:"40%",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexWrap:"wrap",
        margin:"3% auto"
    },
    cardContainer:{
        display:"flex",
        justifyContent:"space-evenly",
        flexWrap:"wrap"
    }
})

class Tags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //setting tags state to an empty array
            tags: []
        }


    }

      inputkeydown = (e) => {
        const down = e.target.value
        //check if keystroke the user hit was definitly enter
        if (e.key === "Enter" && down) {

            if(this.state.tags.find(tag => tag.toLowerCase() === down.toLowerCase())) {
                return;
            }
            //and only add the tag if user put a value in the input field
            this.setState({ tags: [...this.state.tags, down] })
            //clear the value after tag is added
            this.tagInput.value = null
            

        } else if (e.key === "Backspace" && !down) {
            this.removetags(this.state.tags.length - 1)
        }
    }

    removetags = (i) => {
        //creating a new array and spreading the tags so we can remove them
        const newTags = [...this.state.tags]
        //remove tags using splice
        newTags.splice(i,1)
        //set new state
        this.setState({ tags: newTags})
    }

    render() {

        const {classes} = this.props
        return (
            <div>
                <div className={classes.cardContainer}>
                    {this.state.tags.map(tag => (
                        <Card className={classes.Tags} key={tag}>
                        {tag}
                        <HighlightOffIcon onClick={(i) => {this.removetags();}} type="button" />
                        </Card>
                    ))}

                </div>
                <TextField label="Add tags....." required  type="text" onKeyDown={this.inputkeydown} ref={c => { this.tagInput = c; }} />
            </div>
        )

    }
}
export default withStyles(Styles, {withTheme: true }) (Tags)