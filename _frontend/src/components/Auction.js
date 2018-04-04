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
        // Get the seller of the auction
        axios.get('http://localhost:5000/soled/user/id/' + this.props.viewItems[0].sellerId)
        .then (response => {
            // console.log(response.data);

            this.setState({
                seller: response.data
            })
        })            
    }
    

    render() { 
        return ( 
            <div className="container-fluid">                
                <div className="container">
                {/* { Array 0 is the auction Array 1 is the sneaker } */}
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