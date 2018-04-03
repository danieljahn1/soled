import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import NavBar from './Nav-bar'
import Home from './Home'
import SignUp from './Sign-up'
import SignIn from './Sign-in'
import UserProfile from './User-profile'
import Listings from './Listings'

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="nav-bar-div">
                    {/* <NavBar /> */}
                    {/* <SignUp/> */}
                    <SignIn/>
                </div>
            <div className="container-fluid">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/userprofile/' component={UserProfile} />
                    <Route path='/listings' component={Listings} />
                </Switch>
            </div>
                
            </div>
        )
    }
}

export default Container;
