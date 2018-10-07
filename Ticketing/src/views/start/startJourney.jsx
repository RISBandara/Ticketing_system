import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import '../../css/startJourney.css'
import Upper from '../upperImage'
import QrReader from 'react-qr-reader';

var QRCode = require('qrcode.react');


export default class StartJourney extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerDetails: [],
            id: '',
            delay: 300,
            result: 'No result',
        };
        this.handleScan = this.handleScan.bind(this)
    }

    componentDidMount() {
        this.setState({id: this.props.id});
        console.log("id" + this.state.id);
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data,
            });
/*
            alert(this.state.result);
*/
            const arr = data.split(",");
            var now= new Date().toString();
            localStorage.setItem("start",arr[0]);
            localStorage.setItem("start_lat",arr[1]);
            localStorage.setItem("start_long",arr[2]);
            localStorage.setItem("start_time",now);
            this.props.history.push(`/onJourney`);
        }
    }

//scan QR code
    handleError(err) {
        console.error(err)
    }


    render() {
        return (
            <div className="startJourney">
                <div>
                    <Upper/><br/>
                    <center>
                        <p>Align End point QR code within frame to scan and Start journey</p>
                    </center>
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{width: '100%'}}
                    />
                    <div className="container">
                        <div className="row" align="center">
                            <div>
                                <QRCode className="col-md-12 col-xs-12 col-xs-offset-4 col-sm-12"
                                        value={localStorage.getItem("key")}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 col-xs-offset-2">
                                <label>Name</label>
                            </div>
                            <div className="col-xs-7">
                                <label>{localStorage.getItem("name")}</label>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-xs-3 col-xs-offset-2">
                                <label>NIC</label>
                            </div>
                            <div className="col-xs-7">
                                <label>{localStorage.getItem("nic")}</label>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-xs-3 col-xs-offset-2">
                                <label>Your PIN</label>
                            </div>
                            <div className="col-xs-7">
                                <label>{localStorage.getItem("key")}</label>
                            </div>
                        </div>
                        <br/>
                        <div className="row" align="center">
                            <div className="col-xs-12">
                               {/* <Link to="/onJourney">
                                    <button className="btn btn-primary">Scan & Start</button>
                                    <br/><br/></Link>*/}
                                <Link to="/home">
                                    <button className="btn btn-primary">Home</button>
                                </Link>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>

            </div>
        );
    }
}