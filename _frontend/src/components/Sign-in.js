import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setLoginSession } from '../redux/actions'
import axios from 'axios'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedInUser: '',
            verifyLogin: '',
            verifyPassword: '',
            redirect: false,
        }
    }

    userSignIn(e) {
        if (this.state.verifyLogin != '' && this.state.verifyPassword != '') {
            e.preventDefault();
            var urlString = this.state.verifyLogin + '+' + this.state.verifyPassword
            axios.get('http://localhost:5000/soled/user/login/' + urlString)
                .then(response => {
                    if (response.status == 200) {
                        this.setState({
                            loggedInUser: response.data
                        })
                        this.props.sendUserObjToRedux(this.state.loggedInUser);
                        var userId = { userId: this.state.loggedInUser.id }
                        axios.post('http://localhost:5000/soled/user/login/', userId)
                            .then(response => {
                                console.log("successful login");
                                this.setState({
                                    redirect: true
                                })
                            })
                    } else {
                        alert("Incorrect Email or Password.");
                    }
                })
        }
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/listings" />
        }
        // if (redirect && this.props.eventLastViewed.length != 0) {
        //     return <Redirect to={this.joinEventUrl()} />
        // } else if (redirect) {
        //     return <Redirect to="/welcome" />
        // }

        return (
            <div className="col-md-6 forms">
                <h2>Sign in to sell your soles</h2>
                <div className="col-md-12">
                    <div className="pull-right">
                        <span>Don't have an account?</span>
                        <Link to="/signup"><button className="btn btn-link">Sign Up</button></Link>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="email" autoComplete="email" placeholder="Email or Username" value={this.state.verifyLogin} onChange={(e) => { this.setState({ verifyLogin: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder="Password" value={this.state.verifyPassword} onChange={(e) => { this.setState({ verifyPassword: e.target.value }) }} required />
                        </div>
                        <button type="submit" className="btn btn-success btn-block" onClick={this.userSignIn.bind(this)}>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInSession: state.loggedInUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendUserObjToRedux: loggedInUser => dispatch(setLoginSession(loggedInUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
