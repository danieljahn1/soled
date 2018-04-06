import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MyAuctions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myUserId: '',
            myAuctionsArr: [],
            myWinningsArr: [],
            allUsersArr: [],
            allSneakersArr: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/soled/user/login/')
            .then(response => {
                var index = response.data.length - 1;
                this.setState({
                    myUserId: response.data[index].userId
                })
                axios.get('http://localhost:5000/soled/auction/')
                    .then(response => {
                        this.setState({
                            myAuctionsArr: response.data.filter(auction => auction.sellerId == this.state.myUserId),
                            myWinningsArr: response.data.filter(auction => auction.winnerId == this.state.myUserId)
                        })
                        console.log(this.state.myAuctionsArr)
                        console.log(this.state.myWinningsArr)
                    })
                axios.get('http://localhost:5000/soled/user/')
                    .then(response => {
                        this.setState({
                            allUsersArr: response.data
                        })
                        console.log(this.state.allUsersArr)
                    })
                axios.get('http://localhost:5000/soled/sneaker/')
                    .then(response => {
                        this.setState({
                            allSneakersArr: response.data
                        })
                        console.log(this.state.allSneakersArr)
                    })
            })
    }

    render() {
        return (
            <div>
                <h3 className="col-md-12">My Listings</h3>
                <div className="col-md-12">
                    {
                        // this.state.allUsersArr.map((seller, index) => this.state.myAuctionsArr.filter(auctions => auctions.sellerId == seller.id).map(auction =>
                        //     this.state.allUsersArr.map((winner, index) => this.state.myAuctionsArr.filter(auctions => auctions.winnerId == winner.id).map(auction =>
                                this.state.allSneakersArr.map((sneaker, index) => this.state.myAuctionsArr.filter(auctions => auctions.sneakerId == sneaker.id).map(auction =>
                                    <div className="col-md-4" key={auction.id}>
                                        {/* <div>Id: {auction.id}</div> */}
                                        <h3> {sneaker.brand}, {sneaker.model}, {sneaker.version} </h3>
                                        <div>Size: {sneaker.size}</div>
                                        {/* <div>Seller: {seller.username}</div> */}
                                        <div>Seller: {auction.sellerId}</div>
                                        <div>Start Date: {auction.startDate}</div>
                                        <div>End Date: {auction.endDate}</div>
                                        <div>Start Price: ${auction.minPrice}</div>
                                        {/* <div>End Price: ${auction.maxPrice}</div> */}
                                        {/* <div>Winner: {winner.username}</div> */}
                                        <div>Winner: {auction.winnerId}</div>
                                        <div>Brand: {sneaker.brand}</div>
                                        <Link to={"/sole/" + auction.id}><img src={sneaker.sneakerPics[0].path} alt="auction sneaker image" width="250" /></Link>
                                        <h1></h1>
                                        {(!auction.completetPayment)
                                            ?
                                            <button className="btn"></button>
                                            :
                                            <button className="btn"></button>
                                        }
                                        <h1></h1>
                                    </div>
                                ))
                        //     ))
                        // ))
                    }
                </div>
                <h3 className="col-md-12">My Winnings</h3>
                <div className="col-md-12">
                    {this.state.allSneakersArr.map((sneaker, index) => this.state.myWinningsArr.filter(auctions => auctions.sneakerId == sneaker.id).map(auction =>
                        <div className="col-md-4" key={auction.id}>
                            {/* <div>Id: {auction.id}</div> */}
                            <h3> {sneaker.brand}, {sneaker.model}, {sneaker.version} </h3>
                            <div>Size: {sneaker.size}</div>
                            <div>Seller: {auction.sellerId}</div>
                            <div>Start Date: {auction.startDate}</div>
                            <div>End Date: {auction.endDate}</div>
                            <div>Start Price: ${auction.minPrice}</div>
                            {/* <div>End Price: ${auction.maxPrice}</div> */}
                            <div>Winner: {auction.winnerId}</div>
                            <Link to={"/sole/" + auction.id}><img src={sneaker.sneakerPics[0].path} alt="auction sneaker image" width="250" /></Link>
                            <h1></h1>
                            {(!auction.completePayment)
                                ?
                                <button className="btn btn-primary">Complete Transaction</button>
                                :
                                <button className="btn btn-warning" disabled>Your Sole Has Shipped</button>
                            }
                            <h1></h1>
                        </div>
                    ))}
                    <h1></h1>
                </div>
            </div>
        )
    }
}

export default MyAuctions
