import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                id:'',
                username:'',
                password:'',
                image:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                zipcode:'',
                country:'',
            }
          }
    }
    editUserProfile(){
        return (
            <div>
                <p>Edit</p>
                <button onClick={this.person.edit}>Edit</button>
            </div>
        )
    }
    saveUserProfile(){
        return (
            <div>
                
            </div>
        )
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
                                            <img className="img-circle avatar avatar-original" src={this.props.loggedInUser[0].imageurl} style={{ width: '100px' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12" style={{ marginLeft: '50px' }}>
                                                    <h1 className="only-bottom-margin">{this.props.loggedInUser[0].username}</h1>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6" style={{ marginLeft: '50px' }}>
                                                    <span>Address1: </span><b>{this.props.loggedInUser[0].address1}</b><br />
                                                    <span>Address2: </span><b>{this.props.loggedInUser[0].address2}</b><br />
                                                    <span>City: </span><b>{this.props.loggedInUser[0].city}</b><br />
                                                    <span>State: </span><b>{this.props.loggedInUser[0].state}</b><br />
                                                    <span>Zip: </span><b>{this.props.loggedInUser[0].zip}</b><br />
                                                    <span>Country: </span><b>{this.props.loggedInUser[0].country}</b><br />
                                                    <span>Email: </span><b>{this.props.loggedInUser[0].email}</b><br />
                                                    <span>Password: </span><b>************</b><br />
                                                </div>
                                            </div>
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
