import React from "react"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import { getToken, deleteToken } from "../token"

const Header = props => {
    const isLoggedIn = !!getToken

    return (
        <div>
            <div>
                
                <div> TaskCruncher </div>
                <Link to="/">
                    New
             </Link>
             <div>|</div>
             <Link to="/search">Search</Link>
                {isLoggedIn && (
                    <div>
                        <div>|</div>
                        <Link to="/create">

                            submit
             </Link>
             <div>|</div>
                        <Link to="/login">Login</Link>
                        <div>|</div>
                    </div>

                )}
            </div>


            <div>
                {isLoggedIn ? (
                    <div onClick={() => {
                        deleteToken()
                        props.history.push("/")
                    }}
                    >
                        logout
            </div>
                ) : (
                        <Link to="/login">Login</Link>
                    )}
            </div>

        </div>
    )
}

export default withRouter(Header)