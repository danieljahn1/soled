import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearLoginSession } from '../redux/actions'
import axios from 'axios'

class NavKnown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    logout() {
        axios.delete('http://localhost:5000/soled/user/login/')
            .then(response => {
                var loggedInUserCopy = this.props.loggedInUser
                loggedInUserCopy = '';
                this.props.sendToRedux(loggedInUserCopy);
                // this.setState({
                //     redirect: true
                // })
            })
    }

    render() {
        // const { redirect } = this.state;
        // if (redirect) {
        //     return <Redirect to="/"/>
        // }

        return (
            <nav className="navbar navbar-default" style={{ marginBottom: "-10px" }}>
                <div className="container-fluid" >
                    <div className="navbar-header">
                        <a className="navbar-brand" id="title" href="/">SOLEd!</a>
                    </div>
                    <div className="pull-right">
                        <Link to="/viewsoles/"><button className=" btn btn-link">GET SOME SOLE</button></Link>
                        <Link to="/createsole/"><button className="btn btn-link">SELL YOUR SOLE</button></Link>
                        <Link to="/mysole/"><button className="btn btn-link">MY SOLE</button></Link>
                        <Link to="/"><button className="btn btn-link" onClick={this.logout.bind(this)}>LOG OUT</button></Link>
                    </div>
                </div>
            </nav >
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendToRedux: logOutUser => dispatch(clearLoginSession(logOutUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavKnown)
