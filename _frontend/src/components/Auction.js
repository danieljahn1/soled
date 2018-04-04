import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

class Auction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seller: {},
            bids: [],
            bidInput: ""      
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

        // Check if the auction has a max price. If it doesn't then hide the End Auction button
        if (this.props.viewItems[0].maxPrice > 0) {
            document.getElementById("btnEndAuction").style.display = '';
        }
        else {
            document.getElementById("btnEndAuction").style.display = 'none';
        }

    }
    

    render() { 
        return (
            <div className="container-fluid">                
                <div className="container">
                {/* { this.props.viewItems: Array 0 is the auction. Array 1 is the sneaker } */}
                    <div className="col-md-3">
                        <div className="row">
                            <img src={ this.props.viewItems[1].sneakerPics[0].path } className="img-responsive" width="400" />
                        </div>
                        <div className="row auctionSections">
                            <p>&nbsp;</p>
                            <p><strong>Seller:</strong></p>
                            <p>{ this.state.seller.username }</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row auctionSections">
                            <h3>Model: { this.props.viewItems[1].model }</h3>
                            <h3>Brand: { this.props.viewItems[1].brand }</h3>
                            <h3>Version: { this.props.viewItems[1].version }</h3>
                            <h3>Size:  { this.props.viewItems[1].size }</h3>
                        </div>
                        <div className="row auctionSections">
                            <p>Started on: { this.formatDate(this.props.viewItems[0].startDate) }</p>
                            <p>Ends on: { this.formatDate(this.props.viewItems[0].endDate) }</p>
                        </div>
                        <div className="row auctionSections">
                            <h5>Start Price: ${ this.props.viewItems[0].minPrice }</h5>
                            <span className="endAuction">End Auction Price: { (this.props.viewItems[0].maxPrice > 0) ? "$" + this.props.viewItems[0].maxPrice : "N/A" } </span>
                            <button id="btnEndAuction" className="btn btn-danger btn-sm">End the Auction</button>                    
                        </div>
                        <div className="row auctionSections">
                            <div className="row">
                                <div className="col-md-8">
                                    <h4>Current Bid: { (this.getHighestBid() > 0) ? "$" + this.getHighestBid() : "Be the first person to bid!"  }</h4>
                                </div>
                                <div className="col-md-4">
                                 { ( this.state.bids.length > 0 ) ? "Number of Bids: " +  this.state.bids.length : "" }
                                </div>
                            </div>
                            
                            
                            <div className="col-xs-2">
                            <input type="text" className="form-control" id="txtBid" onChange={ e => this.setState({   bidInput: e.target.value })  } />
                            </div> 
                            <button id="btnPlaceBid" className="btn btn-primary btn-sm" onClick={ this.placeBid() }>Place Your Bid</button>
                        </div>
                        <div className="row">
                            <h4>Description:</h4>
                            { this.props.viewItems[1].description }
                        </div>
                    </div>                    
               
                    
                
                </div>
            </div>
         )
    }

    placeBid() {
        // Check the bid entry
    }
    

    getHighestBid() {
        // Get the highest bid of the item
        if (this.state.bids.length > 0) {
            var highestBid = 0;
            var lastBid = 0;
            for (var i = 0; i < this.state.bids.length; i++) {
                // Check the bid price against the previous one. If it is higher, set to highestBid
                if (this.state.bids[i].bidPrice > lastBid) {
                    highestBid = this.state.bids[i].bidPrice;
                }

                // Set the evaluated bid to lastBid for comparison to the next value
                lastBid = this.state.bids[i].bidPrice;
            }

            return highestBid;
        }
        else {
            return 0;
        }
        
    }

    formatDate(d) {
        // Format the date from yyyy-mm-dd into MM/dd/yyyy for display
        var year = d.substr(0,4);
        var month = d.substr(5,2);
        var day = d.substr(8,2)
        var time = d.substr(11);
    
        var date = month + '/' + day + '/' + year + " " + time;
        return date;       
    }
    
}

const MapStateToProps = state => {
    return {
        viewItems: state.viewItems
    }
}

 
export default connect(MapStateToProps)(Auction);