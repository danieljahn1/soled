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
            sneakers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/soled/sneaker/')
            .then(response => {
                this.setState({
                    sneakers: response.data
                })
            })
    }

    render() {
        return (
            <div>
                <div id="jumbo" className="jumbotron">
                    <h1>Welcome to Soled!</h1>
                    <p>Sell your sole or buy soles</p>
                    <p><Link to="/signup"><button className="btn btn-primary btn-lg" href="#" role="button">Sign up</button></Link></p>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        {this.state.sneakers[2] != undefined &&
                            (<img src={this.state.sneakers[2].sneakerPics[0].path} alt="..." />)
                        }
                        <div className="caption">
                            <h3>{this.state.sneakers[2] && this.state.sneakers[2].brand}</h3>
                            <p>{this.state.sneakers[2] && this.state.sneakers[2].description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        {this.state.sneakers[1] != undefined &&
                            (<img src={this.state.sneakers[1].sneakerPics[0].path} alt="..." />)
                        }
                        <div className="caption">
                            <h3>{this.state.sneakers[1] && this.state.sneakers[1].brand}</h3>
                            <p>{this.state.sneakers[1] && this.state.sneakers[1].description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        {this.state.sneakers[0] != undefined &&
                            (<img src={this.state.sneakers[0].sneakerPics[0].path} alt="..." />)
                        }
                        <div className="caption">
                            <h3>{this.state.sneakers[0] && this.state.sneakers[0].brand}</h3>
                            <p>{this.state.sneakers[0] && this.state.sneakers[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;