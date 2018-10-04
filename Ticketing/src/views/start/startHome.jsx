import React,{Component} from 'react'
import Upper from '../upperImage'
import '../../css/start.css'
import {Link} from "react-router-dom";

export default class StartHome extends Component{

    constructor(props){
        super(props);

        this.state = {
            // login customer imformation goes here
            customer:{"name" : "John Doe" , "Address": "Colombo,Sri Lanka", "phone" : "07756984523"},
            Account:{"balance" : "250"},
        }
    }



    render(){
        return <div className="start">
            <Upper/>
            <div className="col-sm-12 UserHeader">
                <center>
                    <h2>{localStorage.getItem("name")}</h2>
                    <p>{this.state.customer.Address}</p>    
                </center>
            </div>
            <Link to="/startJourney" ><button className="btn col-sm-12 boxButton" >Start Journey</button></Link>
            <button className="btn col-sm-12 boxButton" >Recharge Account</button>
            <button className="btn col-sm-12 boxButton" >Journey History</button>
        </div>
    }
}