import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import NavBar from './Nav-bar'
import Home from './Home'
import SignUp from './Sign-up'
import SignIn from './Sign-in'
import UserProfile from './User-profile'
import Listings from './Listings'
import Auction from './Auction'
import CreateListing from './CreateListing'
import MyAuctions from './MyAuctions'
import Welcome from './Welcome'


class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="nav-bar-div">
                    <NavBar />
                </div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/mysole' component={UserProfile} />
                    <Route path='/viewsoles' component={Listings} />
                    <Route path='/createsole' component={CreateListing} />
                    <Route path='/sole/:auctionId' component={Auction} />
                    <Route path='/allmysoles' component={MyAuctions} />
                    <Route path='/welcome' component={Welcome} />
                </Switch>
            </div>
        )
    }
}

export default Container
