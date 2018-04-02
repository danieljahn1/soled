import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 className="pull-left">{this.props.title}</h1>
                <a href="#" className="pull-right">Customers</a>
                <a href="#" className="pull-right">Spinners</a>
            </div>
         )
    }
}
 
export default Title;