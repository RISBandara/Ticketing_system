import React , {Component} from 'react'
import '../../css/onJourney.css'
import Upper from '../upperImage'
import {Link} from "react-router-dom";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import BaseUrl from "../../constatnts/base-url";



 const style = {
    width: '100%',
    height: '200px',
     position:'relative'
}
export default class OnJourney extends Component {

    constructor(props){
        super(props)
        this.state={
            city:'',
            province:'',
            country:'',
            lat:'',
            lon:''
        }

    }

    assignValues(res){
        this.setState({
            city:res.data["city"],
            province:res.data["regionName"],
            country:res.data["country"],
            lat:res.data["lat"],
            lon:res.data["lon"],
        })
    }

    componentWillMount(){
        BaseUrl.post('http://ip-api.com/json').then(res=>{
        this.assignValues(res);
            // this.notifySuccess("Successfully Submitted.!")
        }).catch(error=>{

        })
    }

    render(){
        return(
            <div className="onJourney">
            <Upper/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {/*<Map  class="map" style={style} google={this.props.google} zoom={14}>*/}

                                {/*<Marker onClick={this.onMarkerClick}*/}
                                        {/*name={this.state.city} />*/}

                                {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}
                                    {/*/!*<div>*!/*/}
                                    {/*/!*<h1>{this.state.selectedPlace.name}</h1>*!/*/}
                                    {/*/!*</div>*!/*/}
                                {/*</InfoWindow>*/}
                            {/*</Map>*/}
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
                <div className="box box2">
                    <table>
                        <tr>
                            <td><b>Next Stop</b></td>
                        </tr>
                        <tr>
                            <td><b>Vihara Mawatha</b></td>
                        </tr>  
                    </table>
                </div>
                <div className="box box3">
                <table>
                        <tr>
                            <td><b>Previous Stop</b></td>
                        </tr>
                        <tr>
                            <td><b>Kothalawala</b></td>
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

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyBwYpmkJXqjGo5kTwjmpAgBhea--ZxPGMM")
// })(OnJourney)