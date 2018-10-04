import React , {Component} from 'react'
import '../../css/onJourney.css'
import Upper from '../upperImage'
import {Link} from "react-router-dom";
import BaseUrl from "../../constatnts/base-url";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class OnJourney extends Component {

    constructor(props){
        super(props)
        this.state={
            city:'',
            province:'',
            country:'',
            lat:'',
            lon:'',
            center: {
                lat: 59.95,
                lng: 30.33

            },
            zoom: 11
        }

    }

    assignValues(res){
        this.setState({
            city:res.data["city"],
            province:res.data["regionName"],
            country:res.data["country"],
            lat:res.data["lat"],
            lon:res.data["lon"],
            center:{
                lat:res.data["lat"],
                lng:res.data["lon"],
            }
        })

        localStorage.setItem("lat",this.state.lat);
        localStorage.setItem("lon",this.state.lon);
        localStorage.setItem("city",this.state.city);
    }

    componentWillMount(){
        BaseUrl.post('http://ip-api.com/json').then(res=>{
        this.assignValues(res);
            // this.notifySuccess("Successfully Submitted.!")
        }).catch(error=>{

        })
    }

<<<<<<< HEAD
=======

>>>>>>> b35c1efbd2732826dcdebdc78b01ba1c0aca5967
    render(){
        return(
            <div className="onJourney">
            <Upper/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div style={{ height: '40vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyBwYpmkJXqjGo5kTwjmpAgBhea--ZxPGMM" }}
                                    defaultCenter={this.state.center}
                                    center={this.state.center}
                                    defaultZoom={this.state.zoom}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text={'Kreyser Avrora'}
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>

                <div className="box box1">
                    <table>
                        <tr>
                            <td><b>OnBoard</b></td>
                        </tr>
                        <tr>
                            <td><b>{this.state.city}</b></td>
                        </tr>
                        <tr>
                            <td><b>{this.state.province}</b></td>
                        </tr>
                    </table>
                </div>
                <center>
                    <Link to="/endQR"><button className='btn btn-primary'>End Journey</button></Link>
                </center>
            </div>
        );
    }
}

