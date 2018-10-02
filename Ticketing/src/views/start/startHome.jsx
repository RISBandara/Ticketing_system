import React,{Component} from 'react'
import Upper from '../upperImage'
import '../../css/start.css'

export default class StartHome extends Component{

    constructor(props){
        super(props);

        this.state = {
            // login customer imformation goes here
            customer:{"name" : "John Doe" , "Address": "Colombo,Sri Lanka", "phone" : "07756984523"},
            Account:{"balance" : "250"},
        }
    }

    onStrtJourney = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/startJourney?customerName=${this.state.customer.name}&customerAddress=${this.state.customer.Address}&phone=${this.state.customer.phone}`);
    } 

    onRecharge = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/Recharge?customerName=${this.state.customer.name}&customerAddress=${this.state.customer.Address}&phone=${this.state.customer.phone}`);
    } 

    onHistory = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/History?customerName=${this.state.customer.name}&customerAddress=${this.state.customer.Address}&phone=${this.state.customer.phone}`);
    } 

    render(){
        return <div className="start">
            <Upper/>
            <div className="col-sm-12 UserHeader">
                <center>
                    <h2>{this.state.customer.name}</h2>    
                    <p>{this.state.customer.Address}</p>    
                </center>
            </div>
            <button className="btn col-sm-12 boxButton" onClick={event=>this.onStrtJourney(event)}>Start Journey</button>
            <button className="btn col-sm-12 boxButton" onClick={event=>this.onRecharge(event)}>Recharge Account</button>
            <button className="btn col-sm-12 boxButton" onClick={event=>this.onHistory(event)}>Journey History</button>
           
        </div>
    }
}