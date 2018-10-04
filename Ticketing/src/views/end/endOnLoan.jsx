import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Upper from '../upperImage'
import queryString from 'query-string'

import '../../css/end.css'

export default class endOnLoan extends Component{

    constructor(props){
        super(props);

        this.state = {
            customerDetails:[]
        }
    }

    componentWillMount(){
    }

    render(){
        return <div className="end">
            <Upper/>
            <div className="col-sm-12 UserHeader">
               {/* <center>
                    <h2>{this.state.customerDetails.name}</h2>    
                    <p>{this.state.customerDetails.Address}</p>    
                </center>*/}
            </div>
            <div className="col-sm-12 box">
            <table>
                    <tr>
                        <td>Journey Total: </td>
                        <td><b>{this.state.customerDetails.journeyTot}</b></td>
                    </tr>
                    <tr>
                        <td>Account Balance: </td>
                        <td><b>-{this.state.customerDetails.loanBl}</b></td>
                    </tr>
                </table>
                <br/>
                    <center>
                    <p>*Please note that you need to recharge your
                         account in order to get onboard next time</p>
                    </center>

            </div>

            <div className="col-sm-12 box">
            <table>
                    <tr>
                        <td>From:   </td>
                        <td> <b>Kaduwela</b> </td>
                    </tr>
                    <tr>
                        <td>To:</td>
                        <td><b>Sliit, Malabe</b></td>
                    </tr>
                </table>

            </div>

            <center>
            <div className="col-md-12">
                <Link to='/home'>
                <button className="btn btn-default okButton center-block">Ok</button>
                </Link>
            </div>
            </center>
            
            

            

        </div>
    }
}