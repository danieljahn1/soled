import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formA: true,
            addBrand: '',
            addSize: '',
            addModel: '',
            addStyle: '',
            addVersion: '',
            addCondition: '',
            addDescription: '',
            addImage1: '',
            formB: false,
            addSneakerId: '',
            addSellerId: '',
            addStartDate: '',
            addEndDate: '',
            addMinPrice: '',
            addMaxPrice: '',
            auctionId: '',
            redirect: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/soled/user/login')
            .then(response => {
                this.setState({
                    addSellerId: response.data.userId
                })
            })
    }

    sneakerPreview(e) {
        // e.preventDefault();
        if (this.state.addBrand != '' && this.state.addSize != '' && this.state.addModel != '' && this.state.addStyle != '' && this.state.addVersion != '' && this.state.addDescription != '' && this.state.addImage1 != '') {
            e.preventDefault();
            console.log(this.state.addBrand);
            this.setState({
                formA: false,
            })
        }

    }

    sneakerEdit() {
        this.setState({
            formA: true,
        })
    }

    sneakerPublish() {
        var body = {
            brand: this.state.addBrand,
            size: this.state.addSize,
            model: this.state.addModel,
            style: this.state.addStyle,
            version: this.state.addVersion,
            condition: this.state.addCondition,
            description: this.state.addDescription,
            sneakerPics: [
                {
                    path: this.state.addImage1
                }
            ]
        }
        console.log(body)
        axios.post('http://localhost:5000/soled/sneaker', body)
            .then(response => {
                axios.get('http://localhost:5000/soled/sneaker')
                console.log(response.data);
                this.setState({
                    addSneakerId: response.data.id,
                    formB: true
                })
            })
    }

    auctionPublish(e) {
        e.preventDefault();
        var body = {
            sneakerId: this.state.addSneakerId,
            sellerId: this.state.addSellerId,
            startDate: this.state.addStartDate,
            endDate: this.state.addEndDate,
            minPrice: this.state.addMinPrice,
            maxPrice: this.state.addMaxPrice
        }
        axios.post('http://localhost:5000/soled/auction', body)
            .then(response => {
                this.setState({
                    auctionId: response.data.id,
                    redirect: true
                })
            })
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to={"/auction/" + this.state.auctionId}/>
        }

        return (
            <div>
                <h2>Publish A New Listing</h2>
                {(this.state.formA)
                    ?
                    <div className="col-md-6 forms">
                        <h3>Publish A Sneaker</h3>
                        <h1></h1>
                        <form className="col-md-12">
                            <div className="form-group">
                                {/* <label htmlFor="sneaker-name">Brand</label> */}
                                <input type="text" className="form-control" id="sneaker-brand" autoComplete="off" placeholder="Brand" value={this.state.addBrand} onChange={(e) => { this.setState({ addBrand: e.target.value }) }} required />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="sneaker-model">Model</label> */}
                                <input type="text" className="form-control" id="sneaker-model" placeholder="Model" value={this.state.addModel} onChange={(e) => { this.setState({ addModel: e.target.value }) }} required />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="sneaker-style">Style</label> */}
                                <input type="text" className="form-control" id="sneaker-style" placeholder="Style" value={this.state.addStyle} onChange={(e) => { this.setState({ addStyle: e.target.value }) }} required />
                                {/* <small className="form-text" id="sneaker-style-help">style of sneaker</small> */}
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="sneaker-version"></label> */}
                                <input type="text" className="form-control" id="sneaker-version" placeholder="Version" value={this.state.addVersion} onChange={(e) => { this.setState({ addVersion: e.target.value }) }} required />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="sneaker-size">Size</label> */}
                                <input type="text" className="form-control" id="sneaker-size" placeholder="Size" value={this.state.addSize} onChange={(e) => { this.setState({ addSize: e.target.value }) }} required />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="sneaker-image">Image</label> */}
                                <input type="text" className="form-control" id="sneaker-image" placeholder="Image URL" value={this.state.addImage1} onChange={(e) => { this.setState({ addImage1: e.target.value }) }} required />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="sneaker-condtion"></label> */}
                                <select className="form-control" id="sneaker-condition" value={this.state.addCondition} onChange={(e) => { this.setState({ addCondition: e.target.value }) }} required >
                                    <option defaultValue>Condition ...</option>
                                    <option>Poor</option>
                                    <option>Good</option>
                                    <option>Excellent</option>
                                    <option>Brand New</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="description"></label> */}
                                <textarea type="text" className="form-control" id="sneaker-description" placeholder="Add a message about your sneaker..." value={this.state.addDescription} onChange={(e) => { this.setState({ addDescription: e.target.value }) }} required />
                            </div>
                            <button type="submit" className="btn btn-success btn-block" onClick={this.sneakerPreview.bind(this)}>Preview Sneaker</button>
                        </form>
                    </div>
                    :
                    <div>
                        {(!this.state.formB)
                            ?
                            <div>
                                <div>Brand: {this.state.addBrand}</div>
                                <div>Model: {this.state.addModel}</div>
                                <div>Style: {this.state.addStyle}</div>
                                <div>Version: {this.state.addVersion}</div>
                                <div>Size: {this.state.addSize}</div>
                                <div>Condition: {this.state.addCondition}</div>
                                <div>Description: {this.state.addDescription}</div>
                                <h1></h1>
                                <img src={this.state.addImage1} alt="" />
                                <h1></h1>
                                <div>
                                    <button type="submit" className="btn btn-info" onClick={this.sneakerEdit.bind(this)}>Edit Sneaker</button>
                                    <span> </span>
                                    <button type="submit" className="btn btn-success" onClick={this.sneakerPublish.bind(this)}>Publish Sneaker</button>
                                </div>
                                <h1></h1>
                            </div>
                            :
                            <div>
                                <div>Brand: {this.state.addBrand}</div>
                                <div>Model: {this.state.addModel}</div>
                                <div>Style: {this.state.addStyle}</div>
                                <div>Version: {this.state.addVersion}</div>
                                <div>Size: {this.state.addSize}</div>
                                <div>Condition: {this.state.addCondition}</div>
                                <div>Description: {this.state.addDescription}</div>
                                <h1></h1>
                                <img src={this.state.addImage1} alt="" />
                                <h1></h1>
                                <div className="col-md-6 forms">
                                    <h3>Publish A Auction</h3>
                                    <h1></h1>
                                    <form className="col-md-12">
                                        <div className="form-group">
                                            {/* <label htmlFor="auction-start-date">Start Date</label> */}
                                            <input type="date" className="form-control" id="auction-start-date" placeholder="Start Date" value={this.state.addStartDate} onChange={(e) => { this.setState({ addStartDate: e.target.value }) }} required />
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="auction-end-date">End Date</label> */}
                                            <input type="date" className="form-control" id="auction-end-date" placeholder="End Date" value={this.state.addEndDate} onChange={(e) => { this.setState({ addEndDate: e.target.value }) }} required />
                                            {/* <small className="form-text" id="auction-style-help">style of auction</small> */}
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="auction-min-price">Min Price</label> */}
                                            <input type="number" className="form-control" id="auction-min-price" placeholder="Min Price" value={this.state.addMinPrice} onChange={(e) => { this.setState({ addMinPrice: e.target.value }) }} required />
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="auction-max-price">Max Price</label> */}
                                            <input type="number" className="form-control" id="auction-max-price" placeholder="Max Price" value={this.state.addMaxPrice} onChange={(e) => { this.setState({ addMaxPrice: e.target.value }) }} required />
                                        </div>
                                        <h1></h1>
                                        <button type="submit" className="btn btn-success btn-block" onClick={this.auctionPublish.bind(this)}>Publish Auction</button>
                                        <h1></h1>
                                    </form>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default CreateListing