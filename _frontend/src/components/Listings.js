import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';

import { setViewItem } from '../redux/actions'

class Listings extends React.Component {
    constructor(props) {
        super(props);

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
                // console.log(response.data);

                this.setState({
                    auctions: response.data
                })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                All Sneaker Auction Listings                
                {
                    this.state.sneakers.map( item => 
                    this.state.auctions.filter(auc => auc.sneakerId == item.id )
                    .map( aucItem => 
                        <div className="panel panel-default" key={ item.id }>
                            <div className="panel-body">
                                <div className="col-md-3">
                                    <img src={ item.sneakerPics[0].path } className="img-responsive" width="250" />
                                </div>
                                <div className="row col-md-8">
                                    <Link to={'/auction/' + aucItem.id} onClick={ this.auctionItemToRedux.bind(this, aucItem) }>
                                    { item.brand } { item.model} { item.style } { item.version}
                                    &nbsp;Size&nbsp;{ item.size } 
                                    </Link>
                                </div>
                                <div className="row col-md-8">                            
                                {
                                    
                                        <div key={aucItem.id}>
                                            <strong>${ aucItem.minPrice }</strong>
                                            <p>Starts at: {this.formatDate(aucItem.startDate)}&nbsp;&nbsp;
                                            Ends at: {this.formatDate(aucItem.endDate)}</p>
                                        </div>

                                    
                                }
                                </div>
                                    
                            </div> 
                        </div>
                    )
                    )
                }
                    
                </div>
            
        )

    }

    auctionItemToRedux(auction, e) {
        // Get the sneaker associated with the auction
        var viewSneaker = this.state.sneakers.filter(item => item.id == auction.sneakerId)[0]
        // console.log([auction, viewSneaker]);

        // Set the auction and the sneaker to redux. Array 0 is the auction Array 1 is the sneaker
        this.props.setViewAuctionItem([auction, viewSneaker]);
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

// const MapStateToProps = state => {
//     return {
//         
//     }
// }

const MapDispatchToProps = dispatch => {
    return {
        setViewAuctionItem: viewItem => dispatch(setViewItem(viewItem))
    }
}

export default  connect(null, MapDispatchToProps)(Listings)