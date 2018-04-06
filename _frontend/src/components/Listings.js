import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


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
                this.setState({
                    sneakers: response.data
                })
            })
        
        // Get all auctions
        axios.get('http://localhost:5000/soled/auction')
            .then(response => {
                this.setState({
                    auctions: response.data
                })
            })
    }

    render() {
        return (
            <div className="container-fluid auctionBox">
                               
                {
                    this.state.sneakers.map( item => 
                    this.state.auctions.filter(auc => auc.sneakerId == item.id )
                    .map( aucItem => 
                        ( new Date(Date.now()) >= new Date(aucItem.endDate) )
                        ?
                        // Expired listing
                        <div className="panel panel-default" key={ item.id }>
                            <div className="panel-body listingExpired">
                                <div className="col-md-3">
                                    <Link to={'/sole/' + aucItem.id}>
                                    <img src={ item.sneakerPics[0].path } className="img-responsive listingImgExpired" width="250" />
                                    </Link>
                                </div>
                                <div className="row col-md-8">
                                    <Link to={'/sole/' + aucItem.id}>
                                    { item.brand } { item.model} { item.style } { item.version}
                                    &nbsp;Size&nbsp;{ item.size } 
                                    </Link>
                                </div>
                                <div className="row col-md-8">                            
                                {
                                    
                                        <div key={aucItem.id}>
                                            <strong>Starts at ${ aucItem.minPrice }</strong>
                                            <p>Starts at: {this.formatDate(aucItem.startDate)}&nbsp;&nbsp;
                                            Ends at: {this.formatDate(aucItem.endDate)}</p>
                                            <p className="listingExpiredText"><strong>This listing has expired.</strong></p>
                                        </div>

                                    
                                }
                                </div>
                                    
                            </div> 
                        </div>
                        :
                        // Active listing
                        <div className="panel panel-default" key={ item.id }>
                            <div className="panel-body">
                                <div className="col-md-3">
                                    <Link to={'/sole/' + aucItem.id}>
                                    <img src={ item.sneakerPics[0].path } className="img-responsive" width="250" />
                                    </Link>
                                </div>
                                <div className="row col-md-8">
                                    <Link to={'/sole/' + aucItem.id}>
                                    { item.brand } { item.model} { item.style } { item.version}
                                    &nbsp;Size&nbsp;{ item.size } 
                                    </Link>
                                </div>
                                <div className="row col-md-8">                            
                                {
                                    
                                        <div key={aucItem.id}>
                                            <strong>Starts at ${ aucItem.minPrice }</strong>
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


export default Listings