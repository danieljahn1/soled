import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

class Auction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auction: {},
            sneaker: {},
            seller: {}
        }
    }

    componentDidMount() {        
        // Get the auction
        axios.get('http://localhost:5000/soled/auction/' + this.props.match.params.auctionId)
            .then( response => {
                // console.log(response.data);

                this.setState({
                    auction: response.data
                })
            })
        
        // Get the seller

        // Get the sneaker from the auction
        // axios.get('http://localhost:5000/soled/sneaker/' + this.state.auction.sneakerId)
        // .then (response => {
        //     console.log(response.data);

        //     this.setState({
        //         sneaker: response.data
        //     })
        // })            
    }
    

    render() { 
        return ( 
            <div className="container-fluid">                
                <div className="container">
                { 
                    // Array 0 is the auction Array 1 is the sneaker
                }
                { this.state.auction.minPrice }
                    {this.props.viewItems[1].brand }
                
                </div>
               
            </div>
         )
    }

    
}

const MapStateToProps = state => {
    return {
        viewItems: state.viewItems
    }
}

 
export default connect(MapStateToProps)(Auction);