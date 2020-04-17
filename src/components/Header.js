import React from "react"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import Search from "./search"
// import { getToken, deleteToken } from "../token"
import {makeStyles, AppBar, Toolbar, Typography, Button} from "@material-ui/core"



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
}))
const Header = props => {
    // const isLoggedIn = !!getToken
 const classes = useStyles()
    return (

        <div className={classes.root}>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    TaskCrusher
                </Typography>
                
                <Button><Link to="/">New</Link></Button>
                <Button><Link to="/search">Search</Link></Button>
        
                <Button><Link to="/create">submit</Link></Button>
                <Button><Link to="/login">Login</Link></Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default withRouter(Header)