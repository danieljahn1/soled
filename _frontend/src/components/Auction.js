import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'

import axios from 'axios';

import { redirectToAuction } from '../redux/actions'

class Auction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            auction: {},
            sneaker: {},
            seller: {},
            bids: [],
            bidInput: "",
            currentBid: "",
            highBidder: {},
            winnerId: 0
        }
        
    }

    componentDidMount() {
        // Get the auction data
        axios.get('http://localhost:5000/soled/auction/' + this.props.match.params.auctionId) 
            .then (response => {
                if (response.status == 200) {
                    this.setState({
                        auction: response.data
                    })

                    // Get the sneaker associated with the auction
                    axios.get('http://localhost:5000/soled/sneaker/' + this.state.auction.sneakerId)
                        .then (sneakerResponse => {
                            
                            this.setState({
                                sneaker: sneakerResponse.data
                            })
                        })

                    // Get the seller of the auction
                    axios.get('http://localhost:5000/soled/user/id/' + this.state.auction.sellerId)
                    .then (sellerResponse => {

                        this.setState({
                            seller: sellerResponse.data
                        })
                    })

                    // Get the bids of the auction
                    this.getAuctionBids();
                    

                    // Set up the countdown timer
                    var endDate = this.state.auction.endDate;
                    var self = this;
                    $(function () {                        
                        var checkAuctionStatus = function() {
                            // Auction ended. Set the winner of the auction based on the highest bid
                            
                            if ( new Date(Date.now()) >= new Date(self.state.auction.endDate) ) {
                                // Auction is over                                
                                // Get the bids
                                self.getAuctionBids();

                                // Get the highest bidder's user ID and set to the auction's WinnerID
                                self.setAuctionWinner();                                
                            }                            
                        }

                        var endAuction = new Date(endDate);
                        $('#auctionCountdown').countdown({until: endAuction, onExpiry: checkAuctionStatus });
                    });

                    

                }

            })
            
    }

    getAuctionBids() {
        // Get the bids of the auction
        axios.get('http://localhost:5000/soled/bid/auctionId/' + this.props.match.params.auctionId)
            .then (bidResponse => {

                this.setState({
                    bids: bidResponse.data                    
                });
                
                // Get the high bid and bidderID and set in state to display
                var highBid = this.getHighestBid();
                this.setState({
                    currentBid: highBid
                });
                
                // Get the highest bidder user
                var highBidID = this.getHighestBidderId();
                axios.get('http://localhost:5000/soled/user/id/' + highBidID )
                .then (highBidResponse  => {
                    
                    this.setState({
                        highBidder: highBidResponse.data,
                        winnerId: highBidID
                    });
                })                
                
            })
    }

    checkAuctionWinner() {
        // Check if the auction is expired. If so then declare a winner
        if ( new Date(Date.now()) >= new Date(this.state.auction.endDate) ) {
            // Auction is over                                
            // Get the highest bidder's user ID and set to the auction's WinnerID
            this.setAuctionWinner();
        }
        
    }

    setAuctionWinner() {
         // Get the highest bidder's user ID and set to the auction's WinnerID
                                
         var auctionUpdate  = {
            id: this.state.auction.id,
            sneakerId: this.state.auction.sneakerId,
            sellerId: this.state.auction.sellerId,
            startDate: this.state.auction.startDate,
            endDate: this.state.auction.endDate,
            minPrice: this.state.auction.minPrice,
            maxPrice: this.state.auction.maxPrice,
            winnerId: this.state.winnerId,
            completePayment: false
        }

        axios.put('http://localhost:5000/soled/auction/' + this.state.auction.id, auctionUpdate )
            .then (response => {
                // if (response.status == 200) {
                //     console.log("Done");
                // }
            })
    }
    

    render() { 
        const { redirect } = this.state;
        if (redirect) {
            // If the user is not logged in, redirect them to the signup page
            return <Redirect to="/signin" />
        }
        return (
            
            <div className="container-fluid">                
                <div className="container auctionBox">
                
                    <div className="col-md-3">
                        <div className="row">   
                        
                           { this.state.sneaker.sneakerPics != undefined &&
                             (
                             this.state.sneaker.sneakerPics.map( item => 
                                    <div key={ item.id }>
                                        <img src={ item.path } className="img-responsive" width="400" />
                                    </div>
                                )
                             
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
                            {
                                <div>
                                    {/* If the auction is within two hours of ending, change the display. Time calculation below returns value in seconds. 7200 is the number of  seconds for two hours. */}
                                    { ( (new Date(this.state.auction.endDate).getTime() - new Date(Date.now()).getTime() ) / 1000 <= 7200  )
                                        ?
                                            ( new Date(Date.now()) >= new Date(this.state.auction.endDate) )
                                            ?
                                            <h5 className="auctionEnding"><strong>Auction has ended.</strong></h5>
                                            :
                                            <h5 className="auctionEnding"><strong>Auction ending soon!</strong></h5>
                                        :
                                        <h5><strong>Time Remaining:</strong></h5>
                                    }
                                    <div id="auctionCountdown" className="col-md-4"></div>
                                </div>
                            }
                        </div>
                        <div className="row auctionSections">
                            <h5><strong>Start Price</strong>: ${ this.state.auction.minPrice }</h5>
                                      
                        </div>
                        
                        {
                            (Date.now() <= new Date(this.state.auction.endDate))
                            ?
                            <div className="row auctionSections">
                            <div className="row">
                                <div className="col-md-8">
                                    <h4><strong>Current Price</strong>: { (this.state.currentBid > 0) ? "$" + this.state.currentBid : "Be the first person to bid!"  }</h4>
                                </div>
                                <div className="col-md-4 numBids">
                                { ( this.state.bids.length > 0 ) 
                                    ? 
                                    <div>
                                        <p>Number of Bids: { this.state.bids.length }</p>
                                        <p>Current high bidder: { this.state.highBidder.username }</p>
                                    </div>                                    
                                    : 
                                    ""                                 
                                }                                 
                                </div>
                            </div>
                            
                            
                            <div className="col-xs-2">
                                <input type="number" className="form-control" id="txtBid" value={this.state.bidInput} onChange={ e => this.setState({   bidInput: e.target.value })  } />
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
                            :
                            <div className="row auctionSections">
                                <strong><p>This listing has ended. Ending price is ${ this.state.currentBid  }</p>
                                {( this.state.bids.length > 0 ) ? <p>Winning bidder: { this.state.highBidder.username }</p> : "" }
                                </strong>
                            </div>
                        }                        

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
        else if (this.state.auction.endDate >= Date.now()) {
            alert("Auction has expired. You cannot bid on this item anymore.");
        }
        else {
            // Bid amount is verified. Enter the bid for the user

            // Make sure user is logged in
            if (this.props.loggedInUser != "") {
                // User is logged in. Place the bid.

                // Make sure the user is not the seller of the item so they cannot run up the bid
                if (this.props.loggedInUser.id == this.state.auction.sellerId) {
                    alert("You are the seller of this item. You cannot bid on it.");
                }
                else {
                    // Place the bid
                    // Need the auctionId, the logged in user's ID (bidder), bid price and the current date
                    
                    // Get the current date in yyyy-mm-dd hh:mm:ss to place with the bid
                    var d = new Date();
                    var bidYear = d.getFullYear();
                    var bidMonth = d.getMonth() + 1;
                    if (bidMonth < 10) {
                        // prepend a 0 to a single digit month
                        bidMonth = this.returnLeadingZero(bidMonth);
                    }   
                    var bidDay = d.getDate();
                    if (bidDay < 10) {
                        // prepend a 0 to a single digit day
                        bidDay = this.returnLeadingZero(bidDay);
                    }
                    var bidHour = d.getHours();
                    if (bidHour < 10 ) {
                        // prepend a 0 to a single digit hour
                        bidHour = this.returnLeadingZero(bidHour);
                    }
                    var bidMinute = d.getMinutes();
                    if (bidMinute < 10 ) {
                        // prepend a 0 to a single digit minute
                        bidMinute = this.returnLeadingZero(bidMinute);
                    }
                    var bidSeconds = d.getSeconds();
                    if (bidSeconds < 10 ) {
                        // prepend a 0 to a single digit second
                        bidSeconds = this.returnLeadingZero(bidSeconds);
                    }

                    var bid = {
                        auctionId: parseInt(this.props.match.params.auctionId),
                        bidderId: this.props.loggedInUser.id,
                        bidPrice: parseFloat(this.state.bidInput),
                        bidDate: bidYear + '-' + bidMonth + '-' + bidDay + " " + bidHour + ":" + bidMinute + ":" + bidSeconds
                    }

                    // Post the entered bid to the bid table
                    axios.post('http://localhost:5000/soled/bid', bid)
                        .then( response => {
                            if (response.status == 200) {
                                alert("Your bid has been entered. You are now the high bidder.");

                                // Update the current price section - get the bids of the auction
                                this.getAuctionBids();

                                // Clear the textbox
                                this.setState({
                                    bidInput: ""
                                })
                            }
                        })
                }
            }
            else {
                // Anonymous user. Direct them to sign in
                alert("You must sign in to place a bid.");

                this.props.setAuctionViewed(this.props.match.params.auctionId);
                this.setState({ 
                    redirect: true
                   })
            }
        }
    }

    returnLeadingZero(num) {
        // Prepends a zero if it is a single digit month, day, hour or minute
        return '0' + num;
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

    getHighestBidderId() {
        // Get the highest bid of the item
        if (this.state.bids.length > 0) {
            var highestBidder = 0;
            var lastBid = 0;
            for (var i = 0; i < this.state.bids.length; i++) {
                // Check the bid price against the previous one. If it is higher, set to highestBid
                if (this.state.bids[i].bidPrice > lastBid) {
                    highestBidder = this.state.bids[i].bidderId;
                }

                // Set the evaluated bid to lastBid for comparison to the next value
                lastBid = this.state.bids[i].bidPrice;
            }             
            
            return highestBidder;
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
        loggedInUser: state.loggedInUser,
        auctionLastViewed: state.auctionLastViewed
    }
}

const MapDispatchToProps = dispatch => {
    return {
        setAuctionViewed: auctionId => dispatch(redirectToAuction(auctionId))
    }
}

 
export default connect(MapStateToProps,MapDispatchToProps)(Auction);