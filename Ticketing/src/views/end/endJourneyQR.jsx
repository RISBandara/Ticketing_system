import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Upper from '../upperImage'
//import '../../css/startJourney.css'
import queryString from 'query-string' ;
import QrReader from 'react-qr-reader';

export default class endJourneyQR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerDetails: [],
            journey: [],
            delay: 300,
            result: 'No result',
        };
        this.handleScan = this.handleScan.bind(this)
    }


    componentWillMount() {
        const values = queryString.parse(this.props.location.search)
        this.setState({
            customerDetails: {
                name: values.customerName,
                Address: values.customerAddress,
                phone: values.phone
            }
        })
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data,
            });
            alert(this.state.result);
            const arr = data.split(",");
            alert(this.getDistanceFromLatLonInKm(arr[0], arr[1], 6.927079, 79.861244));
            this.props.history.push(`/end?user=${this.state.customerDetails}&journey=${this.state.journey}`);
        }
    }

//scan QR code
    handleError(err) {
        console.error(err)
    }

//cal distance
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        const dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        const dLon = this.deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }


    render() {
        return (
            <div className="startJourney">
                <Upper/>
                <div className="col-sm-12 UserHeader">
                    <center>
                        <h2>{localStorage.getItem("name")}</h2>
                        <p>{this.state.customer.Address}</p>
                    </center>
                </div>
                <div className="col-md-8" style={{margin: 30}}>
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{width: '100%'}}
                    />
                    <p>{this.state.result}</p>
                </div>

            </div>
        );
    }
}