import React, { Component } from 'react'
import axios from 'axios'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            verifyEmail: '',
            verifyPassword: '',
            redirect: false,
        }
    }

    userSignIn(e) {
        if (this.state.verifyEmail != '' && this.state.verifyPassword != '') {
            e.preventDefault();
            var stringUrl = this.state.verifyEmail + '+' + this.state.verifyPassword
            axios.get('http://localhost:5000/soled/user/' + stringUrl)
                .then(response => {
                    console.log(stringUrl)
                })
        }
    }

    render() {
        const { redirect } = this.state;
            
        return (
            <div className="col-md-6 forms">
                <h2>Sign in to sell your soles</h2>
                <div className="col-md-12">
                    <div className="pull-right">
                        <span>Don't have an account?</span>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" autoComplete="email" placeholder="Email" value={this.state.verifyEmail} onChange={(e) => { this.setState({ verifyEmail: e.target.value }) }} required />
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

export default SignIn
