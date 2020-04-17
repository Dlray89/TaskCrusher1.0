import React from "react"
import {Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root:{
        border: "solid 2px red"
    },
    headerTitle:{
        border:"solid 2px green",
        margin:"2% auto",
        width:"50%",
        textAlign:"center"
    }
}))

function Welcome() {

    const classes = useStyles()
    return(
        <div className={classes.root}>
        <Typography className={classes.headerTitle} variant="h4">
        Welcome to TaskCrusher

        <button>Get Started</button>
        </Typography>
        <div>
            <Typography>
        Plan your day out for success with an online Task Tool you can trust
            </Typography>
        </div>

        </div>
    )
}
export default Welcome