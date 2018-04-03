import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import NavBar from './nav-bar'
import Home from './home'
import SignUp from './sign-up'
import SignIn from './sign-in'
import UserProfile from './user-profile'


class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="nav-bar-div">
                    {/* <NavBar /> */}
                    {/* <SignUp/> */}
                    <SignIn/>
                </div>
                {/* <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/userprofile/' component={UserProfile} />
                </Switch> */}
            </div>
        )
    }
}

export default Container;
