import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
import { userCreate } from '../redux/actions'
import { userAuth } from '../redux/actions'
import uniqid from 'uniqid'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usersArr: [],
            addName: '',
            addEmail: '',
            addPassword: '',
            imageurl: '',
            redirect: false,
        }
    }

    userCreate() {
        if (this.state.addname != '' && this.state.addZip != '' && this.state.addEmail != '' && this.state.addPassword.length > 7) {
            var usersArrCopy = this.state.usersArr.slice();
            usersArrCopy.unshift({
                id: uniqid(),
                name: this.state.addName,
                email: this.state.addEmail,
                password: this.state.addPassword,
                imageurl: ''
            })
            this.props.createNewUserRedux(usersArrCopy);
            this.props.logInNewUserRedux(usersArrCopy);
            this.setState({ redirect: true });
        }
    }


    render() {
        const { redirect } = this.state;
        if (redirect && this.props.eventLastViewed.length != 0) {
            return <Redirect to={this.joinEventUrl()} />
            } else if (redirect) {
                return <Redirect to="/welcome" />
            }

        return (
            <div className="col-md-6 forms">
                <h2>Join in on the action now!</h2>
                <div className="col-md-12">
                    <div className="pull-right">
                        <span>Already have an account?</span>
                        <Link to="/signin"><button className="btn btn-link">Sign In</button></Link>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="add-name" autoComplete="name" placeholder="Full Name" value={this.state.addName} onChange={(e) => { this.setState({ addName: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="add-mail" autoComplete="email" placeholder="Email" value={this.state.addEmail} onChange={(e) => { this.setState({ addEmail: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="password" pattern=".{8,}" className="form-control" id="add-password" autoComplete="new-password" placeholder="Password" value={this.state.addPassword} onChange={(e) => { this.setState({ addPassword: e.target.value }) }} required />
                            <small className="form-text" id="add-password-help">Must be at least 8 characters long.</small>
                        </div>
                        <button type="submit" className="btn btn-success btn-block" onClick={this.userCreate.bind(this, this.state)}>Sign Up</button>
                        <h1></h1>
                        <small className="form-text pull-right" id="tou-pp-help">By Signing Up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</small>
                    </form>
                </div>
            </div>
        )
    }
}


// const mapDispatchToProps = dispatch => {
//     return {
//         createNewUserRedux: newUser => dispatch(userCreate(newUser)),
//         logInNewUserRedux: newUser => dispatch(userAuth(newUser)),
//     }
// }

export default SignUp;