import React, { Component } from 'react';
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
                        <h1>Soled</h1>
                        <Link to="/">Home</Link> | 
                        <Link to="/listings">View All Shoes</Link> |
                        <Link to="/signin">Sign In</Link> |
                        <Link to="/create-listing">Create Listing</Link>
                        <Menu />
                    </nav>
                </div>
            )
    }

}

export default NavBar;