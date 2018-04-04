import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import axios from 'axios'
// import {loadOtherUsers} from '../redux/actions'


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div id="jumbo" className="jumbotron" style={{marginBottom:"5px"}}>
                    <h1 className="display-4">Welcome to SOLEd.</h1>
                    <hr className="my-4" />
                    <p>Sell your SOLE.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Sign up</a>
                    </p>
                </div>
                <div id="deck" className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="images/jordan1.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="images/jordan1.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="images/jordan1.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>





            // if (this.props.loggedInUser.length == 0) {
            //     return (
            //         <NavAnon />
            //     )
            // } else {
            //     return (
            //         <NavKnown />
            //     )
            // }

        )

    }
}

export default Home;