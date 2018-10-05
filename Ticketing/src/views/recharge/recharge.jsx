import React,{Component} from 'react'
import '../../css/recharge.css'
// import Upper from '../upperImage'
import queryString from 'query-string' ;
import Getcode from './recharge';

export default class Reacharge extends Component{

    constructor(props){
        super(props)
        this.state= {
            customerDetails:[],
            payment : {credit : true, mobile: false}
        }
    }

    componentWillMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({customerDetails:{name:values.customerName,address:values.customerAddress,phone:values.phone}})
    }


    onCardClicks = (event) =>{
        event.preventDefault();
        event.stopPropagation();

        this.setState({payment:{mobile:false,credit:true}})

    }

    onMobileClicks = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({payment:{mobile:true,credit:false}})

    }

    ShowPayment = () => {
        
        if(this.state.payment.credit){
            return <div>
                <center>
                    <h3>Credit Card Payment</h3>
                        <div class="form-group">
                            <label>Enter Card No :</label>
                            <input type="text" class="form-control single"  />
                        </div>
                
                        <div class="form-group">
                            <label >Enter Card pin :</label>
                            <input type="text" class="form-control single" id="email" />
                        </div>
                        <button type="submit" style={{backgroundColor:"gray"}} class="btn btn-default">Submit</button>
                        {/*<Getcode />*/}
                </center>
            </div>
        }else{
            return <div>
                <div className="phoneText">
                <div class="form-group">
                        <label >Mobile Number :</label>
                        <input type="text" class="form-control single" id="email" />
                    </div>
                    <div class="form-group">
                        <label>Recharge Amount :</label>
                        <input type="text" class="form-control single" id="email" />
                    </div>
                    <button type="submit" style={{backgroundColor:"gray"}} className="btn btn-default getCode">Get Code</button>
                </div>

                    <div className="col-sm-12 box" style={{height:"120px"}}>
                        <table>
                            <tr>
                                <td>Please enter the 4 digit code to send to your phone to proceed recharge</td>
                            </tr>
                            <tr>
                                <td><center> <input type="text" class="form-control single" id="email" /></center></td>
                            </tr>
                        </table>
                 </div>
            </div>
        }
    }

    render(){

        const btn_css ={
            backgroundColor : "black",
            color : "white",
        };
        const header ={
            backgroundColor : "black",
            color : "white",
        };
        return(
            <div className="recharge">
            
                <div className="header" style={header}>
                    <center>
                        <h3 className="headerText" >ACCOUNT RECHARGE</h3>
                    </center>
                </div>
                <div className="col-sm-12 box">
                    <table>
                        <tr>
                            <td> <b>Balance amount</b> </td>
                            <td>: Rs.100.00</td>
                        </tr>
                        <tr>
                            <td> <b> Account Number</b> </td>
                            <td>: 45879652354</td>
                        </tr>
                    </table>
                 </div>
                <center className="">
                    <hr />
                    <h2>Customer Name : {this.state.customerDetails.name}</h2>
                    <p>Customer Address :{this.state.customerDetails.address}</p>
                    <hr />
                </center> 
                <div>

                </div>
                <div className="">
                    <div className="btn-group groupButton" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary " style={btn_css} onClick={(event)=>this.onCardClicks(event)} >Card Payment</button>
                        <button type="button" className="btn btn-secondary" style={btn_css} onClick={(event)=>this.onMobileClicks(event)} >Mobile Payment</button>
                        <button type="button" className="btn btn-secondary" style={btn_css} onClick={(event)=>this.onMobileClicks(event)} >Machine Payment</button>

                    </div>
                </div>
                {
                    this.ShowPayment()
                }
            </div>
        );
    }
}


