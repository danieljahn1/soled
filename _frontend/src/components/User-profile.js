import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
    render() { 
        return (  )
    }
}
 
export default connect(mapStateToProps)(UserProfile);
