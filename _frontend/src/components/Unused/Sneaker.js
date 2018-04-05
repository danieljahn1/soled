import React, { Component } from 'react';

class Sneaker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'',
            brand:'',
            size:'',
            model:'',
            style:'',
            version:'',
            condition:'',
            description:'',
         }
    }
    render() { 
        return ( 
            <div className="container">
                

            </div>
         )
    }
}
 
export default Sneaker;