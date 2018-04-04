import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

import axios from 'axios';

class Auction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            auction: {},
            sneaker: {},
            seller: {},
            bids: [],
            bidInput: ""      
        }
    }

    componentDidMount() {
        // Get the auction data
        axios.get('http://localhost:5000/soled/auction/' + this.props.match.params.auctionId) 
            .then (response => {
                console.log(response.data);
                if (response.status == 200) {
                    this.setState({
                        auction: response.data
                    })

                    // Get the sneaker associated with the auction
                    axios.get('http://localhost:5000/soled/sneaker/' + this.state.auction.sneakerId)
                        .then (sneakerResponse => {
                            console.log(sneakerResponse.data);
                            console.log(sneakerResponse.data.sneakerPics);
                            this.setState({
                                sneaker: sneakerResponse.data
                            })
                        })

                    // Get the seller of the auction
                    axios.get('http://localhost:5000/soled/user/id/' + this.state.auction.sellerId)
                    .then (sellerResponse => {
                        // console.log(sellerResponse.data);

                        this.setState({
                            seller: sellerResponse.data
                        })
                    })

                    // Get the bids of the auction
                    axios.get('http://localhost:5000/soled/bid/auctionId/' + this.props.match.params.auctionId)
                    .then (bidResponse => {
                        // console.log(bidResponse.data);

                        this.setState({
                            bids: bidResponse.data
                        })
                    })

                }
                
            })            

    }
    

    render() { 
        // const { redirect } = this.state;
        // if (redirect) {
        //     // If the user is not logged in, redirect them to the signup page
        //     return <Redirect to="/signin" />
        // }
        return (
            
            <div className="container-fluid">                
                <div className="container">
                
                    <div className="col-md-3">
                        <div className="row">   
                        
                           { this.state.sneaker.sneakerPics != undefined &&
                             (<img src={ this.state.sneaker.sneakerPics[0].path } className="img-responsive" width="400" />
                             )
                            }
                        </div>
                        <div className="row auctionSections">
                            <p>&nbsp;</p>
                            <p><strong>Seller:</strong></p>
                            <p>{ this.state.seller.username }</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row auctionSections auctionSectionHeader">
                            <div className="row auctionHeader">
                                <div className="col-md-2">Model:</div> 
                                <div className="col-md-5">{ this.state.sneaker.model }</div>
                            </div>
                            <div className="row auctionHeader">
                                <div className="col-md-2">Brand:</div> 
                                <div className="col-md-5">{ this.state.sneaker.brand }</div>
                            </div>
                            <div className="row auctionHeader">
                                <div className="col-md-2">Version:</div> 
                                <div className="col-md-5">{ this.state.sneaker.version }</div>
                            </div>
                            <div className="row auctionHeader">
                                <div className="col-md-2">Size:</div> 
                                <div className="col-md-5">{ this.state.sneaker.size }</div>
                            </div>
                            
                        </div>
                        <div className="row auctionSections">                            
                            <p>Started on: { 
                                this.state.auction.startDate != undefined &&
                                (
                                this.formatDate(this.state.auction.startDate )
                            )
                            }</p>
                            <p>Ends on: { 
                                this.state.auction.startDate != undefined &&
                                (
                                    this.formatDate(this.state.auction.endDate )
                            )
                            }</p>
                        </div>
                        <div className="row auctionSections">
                            <h5><strong>Start Price</strong>: ${ this.state.auction.minPrice }</h5>
                            {
                                (this.state.auction.maxPrice > 0)
                                ?
                                <div>
                                <span className="endAuction">End Auction Price: { (this.state.auction.maxPrice > 0) ? "$" + this.state.auction.maxPrice : "N/A" } </span>
                                <button id="btnEndAuction" className="btn btn-danger btn-sm">End the Auction</button>
                                </div>
                                :
                                <div>                                
                                </div>
                            }
                                              
                        </div>
                        <div className="row auctionSections">
                            <div className="row">
                                <div className="col-md-8">
                                    <h4>Current Bid: { (this.getHighestBid() > 0) ? "$" + this.getHighestBid() : "Be the first person to bid!"  }</h4>
                                </div>
                                <div className="col-md-4 numBids">
                                 { ( this.state.bids.length > 0 ) ? "Number of Bids: " +  this.state.bids.length : "" }                                 
                                </div>
                            </div>
                            
                            
                            <div className="col-xs-2">
                                <input type="number" className="form-control" id="txtBid" onChange={ e => this.setState({   bidInput: e.target.value })  } />
                            </div> 
                            
                            <button id="btnPlaceBid" className="btn btn-primary btn-sm" onClick={ this.placeBid.bind(this) }>Place Your Bid</button>
                            { ( this.state.bids.length > 0 ) 
                                 ?  
                                    <div>
                                        <p className="bidDirections">Enter ${ this.getHighestBid() + 1 } or higher</p>                                    
                                    </div>
                                 : 
                                    <div>
                                        <p className="bidDirections">Enter ${ this.state.auction.minPrice } or higher</p>  
                                    </div>
                            }
                        </div>
                        <div className="row">
                            <h4>Description:</h4>
                            { this.state.sneaker.description }
                        </div>
                    </div>               
               
                    
                
                </div>
            </div>
         )
    }

    placeBid() {
        // Check the bid entry

        // Get the highest bid amount
        var highestBid = this.getHighestBid();
        
        if (highestBid == 0) {
            // No bids exist, use the minPrice of the auction
            highestBid = this.state.auction.minPrice;
        }
        else {
            // Bid exists. Add one to it for the next "eligible" bid amount
            highestBid += 1; 
        }

        if (this.state.bidInput == "") {
            // Make sure the bid amount is not empty
            alert("Please enter a bid amount.");
        }
        else if (this.state.bidInput < highestBid) {
            // Make sure the bid is not lower than the current amount (+ 1)
            alert("Your bid is too low. Please enter a bid of at least $" + highestBid + ".");
        }
        else {
            // console.log(this.state.bidInput);

            // Bid amount is verified. Enter the bid for the user

            // Make sure user is logged in
            if (this.props.loggedInUser.length > 0) {
                // User is logged in. Place the bid.
            }
            else {
                // Anonymous user. Direct them to sign in
            }
        }
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
        viewItems: state.viewItems,
        loggedInUser: state.loggedInUser
    }
}

 
export default connect(MapStateToProps)(Auction);