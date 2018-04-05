import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import axios from 'axios'
// import {loadOtherUsers} from '../redux/actions'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: [],
            sneakers: [
                {
                    id: 2,
                    brand: "Reebok",
                    size: "11.5",
                    model: "Pump",
                    style: "White",
                    version: "v1",
                    condition: "Good",
                    description: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached",
                    sneakerPics: [
                        {
                            id: 3,
                            path: "https://i.pinimg.com/originals/ed/7c/bc/ed7cbc373674f7644dea3e9e228e9242.jpg"
                        }
                    ]
                },
                {
                    id: 1,
                    brand: "Nike",
                    size: "12",
                    model: "Jordans",
                    style: "Red and white",
                    version: "1984",
                    condition: "Mint",
                    description: "These Red and white Jordans have been thoroughly taken care of. Only worn 2 times with minimal wear and tear. Super minty and ready for you to flex with!",
                    sneakerPics: [
                        {
                            id: 1,
                            path: "https://images.solecollector.com/complex/image/upload/rg1zccq86lstafmqms44.jpg"
                        },
                        {
                            id: 2,
                            path: "http://www.rantsports.com/clubhouse/files/2015/11/airjordan1cropped.jpg"
                        }
                    ]
                },
                {
                    id: 3,
                    brand: "Nike",
                    size: "10.5",
                    model: "Platinum Pinnacle",
                    style: "Platinum and White",
                    version: "Air 6",
                    condition: "Excellent",
                    description: "Had these sneakers for years just sitting in the box in my closet. Barely worn. When i did wear them though, people were breaking their necks. Get at these before they're gone.",
                    sneakerPics: [
                        {
                            id: 4,
                            path: "https://dtpmhvbsmffsz.cloudfront.net/posts/2017/10/30/59f763c6f092820c850b2302/m_59f764277fab3a7ad80b1365.jpg"
                        }
                    ]
                }
            ]

        }
    }
    
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <div id="jumbo" className="jumbotron" style={{ marginBottom: "5px" }}>
                    <h1 className="display-4">Welcome to SOLEd.</h1>
                    <hr className="my-4" />
                    <p>Sell your SOLE.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Sign up</a>
                    </p>
                </div>
                <div id="deck" className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={this.state.sneakers[2].sneakerPics[0].path} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.sneakers[2] && this.state.sneakers[2].brand}</h5>
                            <p className="card-text"> {this.state.sneakers[2] && this.state.sneakers[2].description} </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={this.state.sneakers[1].sneakerPics[0].path} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.sneakers[1] && this.state.sneakers[1].brand}</h5>
                            <p className="card-text"> {this.state.sneakers[1] && this.state.sneakers[1].description} </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={this.state.sneakers[0].sneakerPics[0].path} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.sneakers[0] && this.state.sneakers[0].brand}</h5>
                            <p className="card-text"> {this.state.sneakers[0] && this.state.sneakers[0].description} </p>
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