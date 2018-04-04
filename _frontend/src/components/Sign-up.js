import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersArr: [],
            addUsername: '',
            addEmail: '',
            addPassword: '',
            addAddress1: '',
            addAddress2: '',
            addCity: '',
            addState: '',
            addZipCode: '',
            addCountry: '',
            addImgUrl: '',
            redirect: false
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get('http://localhost:5000/soled/user')
            .then(response =>{
                this.setState({
                    usersArr: response.data
                })
                console.log(this.state.usersArr);
            })
    }

    userSignUp(e) {
        e.preventDefault();
        if (this.state.addUsername != '' && this.state.addEmail != '' && this.state.addPassword.length > 5) {
            var body = {
                username: this.state.addUsername,
                email: this.state.addEmail,
                password: this.state.addPassword,
                address1: this.state.addAddress1,
                address2: this.state.addAddress2,
                city: this.state.addCity,
                state: this.state.addState,
                zipCode: this.state.addZipCode,
                country: this.state.addCountry,
                profileImage: this.state.addImgUrl
            }
            axios.post('http://localhost:5000/soled/user', body)
                .then(response => {
                    axios.get('http://localhost:5000/soled/user/email/' + this.state.addEmail)
                        .then(response => {
                            var userId = { userId: response.data.id }
                            console.log(response.data.id)
                            console.log(userId)
                            axios.post('http://localhost:5000/soled/user/login/', userId)
                        })
                    this.setState({
                        redirect: true
                    })
                })
        }
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/listings" />
        }
        
        return (
            <div className="col-md-6 forms">
                <h2>Join SOLEd Now!</h2>
                <div className="col-md-12">
                    <div className="pull-right">
                        <span>Already have an account?</span>
                        <Link to="/signin"><button className="btn btn-link">Sign In</button></Link>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="add-name" autoComplete="name" placeholder="Username" value={this.state.addUsername} onChange={(e) => { this.setState({ addUsername: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="add-mail" autoComplete="email" placeholder="Email" value={this.state.addEmail} onChange={(e) => { this.setState({ addEmail: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="password" pattern=".{6,}" className="form-control" id="add-password" autoComplete="new-password" placeholder="Password" value={this.state.addPassword} onChange={(e) => { this.setState({ addPassword: e.target.value }) }} required />
                            <small className="form-text" id="add-password-help">Must be at least 6 characters long.</small>
                        </div>
                        <button type="submit" className="btn btn-success btn-block" onClick={this.userSignUp.bind(this)}>Sign Up</button>
                        <h1></h1>
                        <small className="form-text pull-right" id="tou-pp-help">By Signing Up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</small>
                    </form>
                </div>
            </div>
        )
    }
}
 
export default SignUp
