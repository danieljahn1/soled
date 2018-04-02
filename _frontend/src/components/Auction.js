import React, { Component } from 'react';

class Auction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                id:'',
                sneakerId:'',
                sellerId:'',
                startDate:'',
                endDate:'',
                mixPrice:'',
                maxPrice:'',
                winnerId:'',

            }
          }
    }
    render() { 
        return ( 
            <div>
             </div>
         )
    }
}
 
export default connect(mapStateToProps)(Auction);