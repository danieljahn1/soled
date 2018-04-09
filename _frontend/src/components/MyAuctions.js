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
            allSneakersArr: [],
            myAuctionsSneakersArr: [],
            myAuctionsSneakersUsersArr: [],
            myWinningsSneakersArr: [],
            myWinningsSneakersUsersArr: []
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
                            myWinningsArr: response.data.filter(auction => auction.winnerId == this.state.myUserId),
                        })
                        console.log("my Auctions Arr")
                        console.log(this.state.myAuctionsArr)
                        console.log("my Winnings Arr")
                        console.log(this.state.myWinningsArr)
                    })
                axios.get('http://localhost:5000/soled/user/')
                    .then(response => {
                        this.setState({
                            allUsersArr: response.data
                        })
                        console.log("all Users Arr")
                        console.log(this.state.allUsersArr)
                    })
                axios.get('http://localhost:5000/soled/sneaker/')
                    .then(response => {
                        this.setState({
                            allSneakersArr: response.data
                        })
                        console.log("all Sneakers Arr")
                        console.log(this.state.allSneakersArr)
                        this.setState({
                            myAuctionsSneakersArr: this.state.myAuctionsArr.map((auction, index) => this.state.allSneakersArr.filter(sneaker => auction.sneakerId == sneaker.id).map(sneaker =>
                                [auction, sneaker]
                            ))
                        })
                        console.log("sneakers' Auctions Arr")
                        console.log(this.state.myAuctionsSneakersArr)
                        this.setState({
                            // myAuctionsSneakersUsersArr: this.state.myAuctionsSneakersArr.map((auction, index) => this.state.allUsersArr.filter(winner => winner.id == auction[0][0].winnerId).map(winner =>
                            //     [auction, winner]
                            // ))
                            myAuctionsSneakersUsersArr: this.state.myAuctionsSneakersArr.map((auction, index) => this.state.allUsersArr.filter(seller => seller.id == auction[0][0].sellerId).map(seller =>
                                [auction, seller]
                            ))
                        })
                        console.log(this.state.myAuctionsSneakersUsersArr)
                        this.setState({
                            myWinningsSneakersArr: this.state.myWinningsArr.map((auction, index) => this.state.allSneakersArr.filter(sneaker => auction.sneakerId == sneaker.id).map(sneaker =>
                                [auction, sneaker]
                            ))
                        })
                        console.log("sneakers' Winnings Arr")
                        console.log(this.state.myWinningsSneakersArr)
                        this.setState({
                            myWinningsSneakersUsersArr: this.state.myWinningsSneakersArr.map((auction, index) => this.state.allUsersArr.filter(seller => seller.id == auction[0][0].sellerId).map(seller =>
                                [auction, seller]
                            ))
                        })
                        console.log(this.state.myWinningsSneakersUsersArr)
                    })
            })
    }

    render() {
        return (
            <div>
                <h3 className="col-md-12">My Listings</h3>
                <div className="col-md-12">
                    {this.state.myAuctionsSneakersUsersArr.map((auction, index) =>
                        <div className="col-md-4" key={auction[0][0][0][0].id}>
                            {/* <div>Id: {auction[0][0][0][0].id}</div> */}
                            <h3> {auction[0][0][0][1].brand}, {auction[0][0][0][1].model}, {auction[0][0][0][1].version}</h3>
                            <div>Size: {auction[0][0][0][1].size}</div>
                            <div>Seller: {this.state.allUsersArr.filter(user => user.id == this.state.myUserId).map(user => user.username)}</div>
                            <div>Start Date: {auction[0][0][0][0].startDate}</div>
                            <div>End Date: {auction[0][0][0][0].endDate}</div>
                            <div>Start Price: ${auction[0][0][0][0].minPrice}</div>
                            {/* <div>End Price: ${auction[0][0][0][0].maxPrice}</div> */}
                            {/* <div>Winner: {auction[0][1].username}</div> */}
                            <h2></h2>
                            <Link to={"/sole/" + auction[0][0][0][0].id}><img src={auction[0][0][0][1].sneakerPics[0].path} alt="auction sneaker image" width="250" /></Link>
                            <h1></h1>
                            {(!auction.completetPayment)
                                ?
                                <button className="btn"></button>
                                :
                                <button className="btn"></button>
                            }
                            <h1></h1>
                        </div>
                    )}
                </div>
                <h3 className="col-md-12">My Winnings</h3>
                <div className="col-md-12">
                    {this.state.myWinningsSneakersUsersArr.map((auction, index) =>
                        <div className="col-md-4" key={auction[0][0][0][0].id}>
                            {/* <div>Id: {auction[0][0][0][0].id}</div> */}
                            <h3> {auction[0][0][0][1].brand}, {auction[0][0][0][1].model}, {auction[0][0][0][1].version} </h3>
                            <div>Size: {auction[0][0][0][1].size}</div>
                            <div>Seller: {auction[0][1].username}</div>
                            <div>Start Date: {auction[0][0][0][0].startDate}</div>
                            <div>End Date: {auction[0][0][0][0].endDate}</div>
                            <div>Start Price: ${auction[0][0][0][0].minPrice}</div>
                            {/* <div>End Price: ${auction[0][0][0][0].maxPrice}</div> */}
                            <div>Winner: {this.state.allUsersArr.filter(user => user.id == this.state.myUserId).map(user => user.username)}</div>
                            <Link to={"/sole/" + auction[0][0][0][1].id}><img src={auction[0][0][0][1].sneakerPics[0].path} alt="auction sneaker image" width="250" /></Link>
                            <h1></h1>
                            {(!auction[0][0][0][0].completePayment)
                                ?
                                <button className="btn btn-primary">Complete Transaction</button>
                                :
                                <button className="btn btn-warning" disabled>Your Sole Has Shipped</button>
                            }
                            <h1></h1>
                        </div>
                    )}
                    <h1></h1>
                </div>
            </div>
        )
    }
}

export default MyAuctions
