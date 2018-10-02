import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import Upper from '../upperImage'
//import '../../css/startJourney.css'
import queryString from 'query-string' ;


export default class endJourneyQR extends Component {
    constructor(props){
        super(props)
        this.state= {
            customerDetails:[]
        }
    }

    componentWillMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({customerDetails:{name:values.customerName,Address:values.customerAddress,phone:values.phone}})
    }

    onScan = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/end?customerName=${this.state.customerDetails.name}&customerAddress=${this.state.customerDetails.Address}&phone=${this.state.customerDetails.phone}`);
    }

    render(){
        return(
            <div className="startJourney">
            <Upper/>
                <center className="">
                    <h2>{this.state.customerDetails.name}</h2>    
                    <p>{this.state.customerDetails.Address}</p> 
                
                </center>             
                <img src={require('../../images/QR.png')} className="qr" alt=""/>
                <center>
                    <Link to='/end'>
                    <button className='btn btn-default' onClick={event=>this.onScan(event)}>SCAN</button>
                    </Link>
                </center>
            </div>
        );
    }
}