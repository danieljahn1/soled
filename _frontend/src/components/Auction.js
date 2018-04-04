import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

class Auction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seller: {},
            bids: []
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
        
        // Get the bids of the auction  http://localhost:5000/soled/bid/auctionId/
        axios.get('http://localhost:5000/soled/bid/auctionId/' + this.props.viewItems[0].id)
            .then (response => {
                // console.log(response.data);

                this.setState({
                    bids: response.data
                })
            })

    }
    

    render() { 
        return (
            <div className="container-fluid">                
                <div className="container">
                {/* { this.props.viewItems: Array 0 is the auction. Array 1 is the sneaker } */}
                    <div className="col-md-3">
                        <img src={ this.props.viewItems[1].sneakerPics[0].path } className="img-responsive" width="400" />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <h3>Model: { this.props.viewItems[1].model }</h3>
                            <h3>Brand: { this.props.viewItems[1].brand }</h3>
                            <h3>Size:  { this.props.viewItems[1].size }</h3>
                        </div>
                        <div className="row">
                            <h5>Start Price: ${ this.props.viewItems[0].minPrice }</h5>
                            <h5><strong>End Auction Price</strong>: { (this.props.viewItems[0].maxPrice > 0) ? "$" + this.props.viewItems[0].maxPrice : "N/A" }</h5>&nbsp;&nbsp;
                            <button id="btnEndAuction" className="btn btn-info btn-sm">End the Auction</button>
                        </div>
                        <div className="row">
                            <h4>Current Bid: ${  }</h4>
                        </div>
                    </div>
               
                    
                
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