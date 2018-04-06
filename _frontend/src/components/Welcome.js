import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }

    componentDidMount() {
        console.log(this.props.userInSession)
    }
    render() {
        return (
            <div className="col-md-10">
                <div className="col-md-8 welcome welcome-user">
                    <h1></h1>
                    <h2>Welcome {this.props.userInSession.username} ! . . .</h2>
                    <h1></h1>
                </div>
                <div className="col-md-8 welcome welcome-find-shoes">
                    <p className="soled home-message" >New and used sneakers from back in the day to today.</p>
                    <Link to="/viewsoles"><button className="btn btn-link btn-lg btn-block">Search for Sneakers</button></Link>
                    <h1></h1>
                </div>
                <div className="col-md-8 welcome welcome-create-listing">
                    <h1></h1>
                    <p className="soled home-message" >Been sitting on an old pair of classics that need a new home? Have a rare pair of sneaks that have been collecting dust in your closet? List them here and see how much cash you can get!</p>
                    <Link to="/createsole"><button className="btn btn-link btn-lg btn-block">Sell Your Sole</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInSession: state.loggedInUser
    }
}

export default connect(mapStateToProps)(Welcome)
