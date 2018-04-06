import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFlag: false,
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
            },
            myUserId: '',
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/soled/user/login")
            .then((response) => {
                console.log(response)

                this.setState({
                    myUserId: response.data[response.data.length - 1].userId
                })
                console.log(this.state.myUserId)
                axios.get("http://localhost:5000/soled/user/id/" + this.state.myUserId)
                    .then((response) => {
                        console.log(response)
                        this.setState({
                            person: response.data
                        })
                        console.log(this.state.person)
                    })
            })
    }
    updateUserProfile() {
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
        console.log("user object: " );
        console.log(body);
        
        axios.put('http://localhost:5000/soled/user/' + this.state.myUserId, body)
            .then((response) => {
                // axios.get('http://localhost:5000/soled/user')
                console.log(response)
            })
    }
    updateUserName(e) {
        console.log(e.target.value);
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
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="">
                                <div className="user-profile">
                                    <div className="row">
                                        <div className="col-md-12 lead">Your Profile</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img className="img-circle avatar avatar-original" src={this.props.person} style={{ width: '100px' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12" style={{ marginLeft: '50px' }}>
                                                    <h1 className="only-bottom-margin">{this.props.username}</h1>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6" style={{ marginLeft: '50px' }}>
                                                <span>Email: </span><b>{this.state.person.email}</b><br />
                                                    <span>Password: </span><b>************</b><br />
                                                    <span>Address1: </span><b>{this.state.person.address1}</b><br />
                                                    <span>Address2: </span><b>{this.state.person.address2}</b><br />
                                                    <span>City: </span><b>{this.state.person.city}</b><br />
                                                    <span>State: </span><b>{this.state.person.state}</b><br />
                                                    <span>Zipcode: </span><b>{this.state.person.zipcode}</b><br />
                                                    <span>Country: </span><b>{this.state.person.country}</b><br />
                                                    <span>Profile Image: </span><b>
                                                    {this.state.person.profileImage}</b><br />
                                                    
                                                </div>
                                                <div>
                                                    <button onClick={(e) => this.setState({editFlag: true})}>Edit</button>
                                                </div>
                                            </div>
                                            {(this.state.editFlag)
                                                ?
                                                <div>
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="add-username" autoComplete="username" placeholder="Username" value={this.state.person.username}
                                                                onChange={this.updateUserName.bind(this)} required />
                                                        </div>
                                                         <div className="form-group">
                                                            <input type="password" pattern=".{8,}" className="form-control" id="add-password" autoComplete="new-password" placeholder="Password" value={this.state.person.password} onChange={this.updatePassword.bind(this)} required />
                                                            <small className="form-text" id="add-password-help">Must be at least 8 characters long.</small>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="add-address1" autoComplete="address1" placeholder="Address1" value={this.state.person.address1} onChange={this.updateAddress1.bind(this)} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="add-address2" autoComplete="address2" placeholder="Address2" value={this.state.person.address2} onChange={this.updateAddress2.bind(this)} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="add-city" autoComplete="city" placeholder="City" value={this.state.person.updateCity} onChange={this.updateCity.bind(this)} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" pattern="[0-9]{5}" className="form-control" id="add-zipcode" autoComplete="postal-code" placeholder="Zip Code" value={this.state.person.updateZipcode} onChange={this.updateZipcode.bind(this)} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="add-country" autoComplete="country" placeholder="Country" value={this.state.person.country} onChange={this.updateCountry.bind(this)} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="image" className="form-control" id="add-profileImage" autoComplete="profileImage" placeholder="Profile Image" value={this.state.person.profileImage} onChange={this.updateProfileImage.bind(this)} required />
                                                        </div>
                                                        <div>
                                                            <button onClick={this.updateUserProfile.bind(this)}>Update</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                :
                                                <div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(UserProfile);
