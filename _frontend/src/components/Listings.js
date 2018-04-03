import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

class Listings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sneakers: [],
            auctions: []
        }
    }

    componentDidMount() {
        // Get all sneakers
        axios.get('http://localhost:5000/soled/sneaker')
            .then(response => {
                console.log(response.data);

                this.setState({
                    sneakers: response.data
                })
            })

        // Get all auctions
        axios.get('http://localhost:5000/soled/auction')
            .then(response => {
                console.log(response.data);

                this.setState({
                    auctions: response.data
                })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                All Sneaker Auction Listings
                <div className="panel panel-default">
                    <div className="panel-body">Shoe</div>
                </div>
            </div>
        )

    }


}

// const MapStateToProps = state => {
//     return {

//     }
// }

// const MapDispatchToProps = dispatch => {
//     return {

//     }
// }

export default Listings