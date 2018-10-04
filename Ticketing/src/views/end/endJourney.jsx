import React , {Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import '../../css/startJourney.css'
import Upper from '../upperImage'
var QRCode = require('qrcode.react');



export default class EndJourney extends Component {
    constructor(props){
        super(props)
        this.state= {
            customerDetails:[],
            id:''
        }
    }

    componentDidMount(){
        this.setState({ id: this.props.id });
        console.log("id"+this.state.id);
    }


    render(){
        return(
            <div className="startJourney">
                <div>
                    <Upper/><br/>
                    <div className="container">
                        <div className="row" align="center">
                            <div >
                                <QRCode className="col-md-12 col-xs-12 col-xs-offset-4 col-sm-12" value={localStorage.getItem("key")} />
                            </div>
                        </div>
                    </div><br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 col-xs-offset-2">
                                <label>Name</label>
                            </div>
                            <div className="col-xs-7">
                                <label>{localStorage.getItem("name")}</label>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-xs-3 col-xs-offset-2">
                                <label>NIC</label>
                            </div>
                            <div className="col-xs-7">
                                <label>{localStorage.getItem("nic")}</label>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-xs-3 col-xs-offset-2">
                                <label>Your PIN</label>
                            </div>
                            <div className="col-xs-7">
                                <label>{localStorage.getItem("key")}</label>
                            </div>
                        </div><br/>
                        <div className="row" align="center">
                            <div className="col-xs-12">
                                <Link to="/onJourney"> <button className="btn btn-primary">Scan</button><br/><br/></Link>

                            </div>
                        </div><br/>
                    </div>
                </div>

            </div>
        );
    }
}