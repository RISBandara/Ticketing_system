import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../../css/history.css'
import queryString from 'query-string'

export default class History extends Component{

    constructor(props){
        super(props);

        this.state = {
            customerDetails:[]
        }
    }

    componentWillMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({customerDetails:{name:values.customerName,Address:values.customerAddress,phone:values.phone}})
    }
    
    render(){
        return(
            <div className="history">
            <div className="col-sm-12 UserHeader">
                <center>
                    <h2>{this.state.customerDetails.name}</h2>    
                    <p>{this.state.customerDetails.Address}</p>    
                </center>
            </div>
            <div className="col-sm-12 boxHeader">
                <center>
                <p>Journey History</p>
                </center>
               
            </div>
            <div className="col-sm-12 box">
            <table>
                    <tr>
                        <td>Date: </td>
                        <td><b>2018-09-18</b></td>
                    </tr>
                    <tr>
                        <td>From: </td>
                        <td><b>Kaduwela</b></td>
                    </tr>
                    <tr>
                        <td>To: </td>
                        <td><b>SLIIT, Malabe</b></td>
                    </tr>
                    <tr>
                        <td>Total cost: </td>
                        <td><b>RS. 30</b></td>
                    </tr>
                </table>
                

            </div>

            

            <center>
            <div className="col-md-12">
                <Link to='/home'>
                <button className="btn btn-default okButton center-block">Close</button>
                </Link>
            </div>
            </center>
            
            

            

        </div>
        );
    }
}
