import React , {Component} from 'react'
import '../../css/startJourney.css'
import Upper from '../upperImage'
import queryString from 'query-string' ;


export default class StartJourney extends Component {
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
        this.props.history.push(`/onJourney?customerName=${this.state.customerDetails.name}&customerAddress=${this.state.customerDetails.Address}&phone=${this.state.customerDetails.phone}`);
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
                    <button className='btn btn default' onClick={event=>this.onScan(event)}>SCAN</button>
                </center>
            </div>
        );
    }
}