import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-10 welcome welcome-user">
                    <h2>Welcome, {this.props.loggedInUser[0].name} . . .</h2>
                </div>

                <div className="col-md-10 pull-right welcome welcome-find-shoes">
                    <p className="soled home-message" >New and used sneakers from back in the day to today.</p>
                    <Link to="/viewevents"><button className="btn btn-success btn-lg pull-right">Search for Sneakers</button></Link>
                </div>
                <div className="col-md-10 pull-left welcome welcome-create-listing">
                    <p className="soled home-message" >Been sitting on an old pair of classics that need a new home? Have a rare pair of sneaks that have been collecting dust in your closet? List them here and see how much cash you can get!</p><Link to="/createlisting"><button className="btn btn-warning btn-lg pull-right">Sell Your Sole</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(Welcome)
