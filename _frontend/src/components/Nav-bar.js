import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu'


class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return ( 
            <div></div>
         )
    }

    render() {
            return (
                <div className="container-fluid col-md-12">
                    <nav id="nav-bar">
                        <h1>SOLEd</h1>
                        <Link to="/">Home</Link> | 
                        <Link to="/listings">Get Some Soles</Link> |
                        <Link to="/create-listing">Sell Your Soles</Link> |
                        <Link to="/my-auctions">My Soles</Link> |
                        <Link to="/signin">Sign In</Link>
                        {/* <Menu /> */}
                    </nav>
                </div>
            )
    }

}

export default NavBar