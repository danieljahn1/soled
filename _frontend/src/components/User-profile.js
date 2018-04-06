import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFlag: false,
            myUserId: '',
            person: {
                id: '',
                username: '',
                email: '',
                password: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zipcode: '',
                country: '',
                profileImage: '',
            }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/soled/user/login")
            .then((response) => {
                this.setState({
                    myUserId: response.data[response.data.length - 1].userId
                })
                axios.get("http://localhost:5000/soled/user/id/" + this.state.myUserId)
                    .then((response) => {
                        this.setState({
                            person: response.data
                        })
                    })
            })
    }
    updateUserName(e) {
        var placeholderName = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                username: placeholderName
            }
        }))
    }
    updateEmail(e) {
        var placeholderEmail = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                email: placeholderEmail
            }
        }))
    }
    updatePassword(e) {
        var placeholderPassword = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                password: placeholderPassword
            }
        }))
    }
    updateAddress1(e) {
        var placeholderAddress1 = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                address1: placeholderAddress1
            }
        }))
    }
    updateAddress2(e) {
        var placeholderAddress2 = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                address2: placeholderAddress2
            }
        }))
    }
    updateCity(e) {
        var placeholderCity = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                city: placeholderCity
            }
        }))
    }
    updateState(e) {
        var placeholderSate = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                state: placeholderState
            }
        }))
    }
    updateZipcode(e) {
        var placeholderZipcode = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                zipcode: placeholderZipcode
            }
        }))
    }
    updateCountry(e) {
        var placeholderCountry = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                country: placeholderCountry
            }
        }))
    }
    updateProfileImage(e) {
        var placeholderProfileImage = e.target.value

        this.setState((prevState) => ({
            ...prevState,
            person: {
                ...prevState.person,
                profileImage: placeholderProfileImage
            }
        }))
    }
    updateUserProfile(e) {
        e.preventDefault();
        var body = {
            id: this.state.person.id,
            username: this.state.person.username,
            email: this.state.person.email,
            password: this.state.person.password,
            address1: this.state.person.addresss1,
            address2: this.state.person.address2,
            city: this.state.person.city,
            state: this.state.person.state,
            zipcode: this.state.person.zipcode,
            country: this.state.person.country,
            profileImage: this.state.person.profileImage,
        }
        axios.put('http://localhost:5000/soled/user/' + this.state.myUserId, body)
            .then((response) => {
                this.setState({
                    editFlag: false,
                })
            })
    }


    render() {
        return (
            <div className="col-md-12">
                <h1></h1>
                <div className="col-md-12">
                    <h2 className="col-md-3">My Sole</h2>
                    <Link to="/allmysoles" className="btn btn-link col-md-6" id="title">See Your Auctions</Link>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{ marginLeft: '50px' }}>
                        <img src={this.state.person.profileImage} alt="your profile image" height="250" /><br />
                        <span>Username: </span><b>{this.state.person.username}</b><br />
                        <span>Email: </span><b>{this.state.person.email}</b><br />
                        <span>Password: </span><b>************</b><br />
                        <span>Address1: </span><b>{this.state.person.address1}</b><br />
                        <span>Address2: </span><b>{this.state.person.address2}</b><br />
                        <span>City: </span><b>{this.state.person.city}</b><br />
                        <span>State: </span><b>{this.state.person.state}</b><br />
                        <span>Zipcode: </span><b>{this.state.person.zipcode}</b><br />
                        <span>Country: </span><b>{this.state.person.country}</b><br />
                        <h1></h1>
                        <div className="col-md-6">
                            <button className="btn btn-info btn-block" onClick={(e) => this.setState({ editFlag: true })}>Edit Profile</button>
                        </div>
                    </div>
                </div>
                <h1></h1>
                {(this.state.editFlag)
                    ?
                    <div>
                        <form className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="add-username" placeholder="Username" value={this.state.person.username} onChange={this.updateUserName.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="add-email" autoComplete="email" placeholder="Eamil" value={this.state.person.email} onChange={this.updateEmail.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="password" pattern=".{6,}" className="form-control" id="add-password" autoComplete="current-password" placeholder="Password" value={this.state.person.password} onChange={this.updatePassword.bind(this)} />
                                <small className="form-text" id="add-password-help">Must be at least 6 characters long.</small>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="add-address1" autoComplete="address-line1" placeholder="Address1" value={this.state.person.address1} onChange={this.updateAddress1.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="add-address2" autoComplete="address-line2" placeholder="Address2" value={this.state.person.address2} onChange={this.updateAddress2.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="add-city" autoComplete="city" placeholder="City" value={this.state.person.city} onChange={this.updateCity.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="add-state" autoComplete="state" placeholder="State" value={this.state.person.state} onChange={this.updateState.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" pattern="[0-9]{5}" className="form-control" id="add-zipcode" autoComplete="postal-code" placeholder="Zip Code" value={this.state.person.updateZipcode} onChange={this.updateZipcode.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="add-country" autoComplete="country" placeholder="Country" value={this.state.person.country} onChange={this.updateCountry.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="url" className="form-control" id="add-profileImage" placeholder="Profile Image URL" value={this.state.person.profileImage} onChange={this.updateProfileImage.bind(this)} />
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={this.updateUserProfile.bind(this)}>Save Updates</button>
                            </div>
                            <h1></h1>
                        </form>
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInSession: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(UserProfile)
