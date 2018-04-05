import React, { Component } from 'react'
import axios from 'axios'

class MyAuctions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myUserId: '',
            myAuctionsArr: [],
            myWinningsArr: [],
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
                        console.log(this.state.auctionsArr)
                    })
                    axios.get('http://localhost:5000/soled/sneaker/')
                        .then(response => {
                            this.setState({
                                allSneakersArr: response.data
                            })
                        })
            })
    }

    render() {
        return (
            <div>
                <h3 className="col-md-12">My Listings</h3>
                <div className="col-md-12">
                    {this.state.myAuctionsArr.map((item, index) =>
                        <div  className="col-md-4" key={item.id}>
                            <div>Id: {item.id}</div>
                            <div>Sneaker: {item.sneakerId}</div>
                            <div>Seller: {item.sellerId}</div>
                            <div>Start Date: {item.startDate}</div>
                            <div>End Date: {item.endDate}</div>
                            <div>Start Price: {item.startPrice}</div>
                            <div>End Price: {item.endPrice}</div>
                            <div>Winner: {item.winnerId}</div>
                            <h1></h1>
                            {(!item.completetPayment)
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
                    {this.state.myWinningsArr.map((item, index) =>
                        <div className="col-md-4" key={item.id}>
                            <div>Id: {item.id}</div>
                            <div>Sneaker: {item.sneakerId}</div>
                            <div>Seller: {item.sellerId}</div>
                            <div>Start Date: {item.startDate}</div>
                            <div>End Date: {item.endDate}</div>
                            <div>Start Price: {item.startPrice}</div>
                            <div>End Price: {item.endPrice}</div>
                            <div>Winner: {item.winnerId}</div>
                            <h1></h1>
                            {(!item.completePayment)
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