import React, { Component } from 'react';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'',
            userId:'',
            dateOfRating:'',
            score:'',
            bidderId:'',
         }
    }
    render() { 
        return ( 
            <div></div>
         )
    }
}
 
export default Rating;