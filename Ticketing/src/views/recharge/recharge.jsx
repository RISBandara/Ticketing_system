import React,{Component} from 'react'
import '../../css/recharge.css'
// import Upper from '../upperImage'
import queryString from 'query-string' ;

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
                    <h3>Credit</h3>
                        <div class="form-group">
                            <label>Card No :</label>
                            <input type="text" class="form-control single"  />
                        </div>
                
                        <div class="form-group">
                            <label >Card pin :</label>
                            <input type="text" class="form-control single" id="email" />
                        </div>
                        <button type="submit" style={{backgroundColor:"gray"}} class="btn btn-default">Submit</button>
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
        return(
            <div className="recharge">
            
                <div className="headerr">
                    <center>
                        <h3 className="headerText">Account Recharge</h3>
                    </center>
                </div>
                <div className="col-sm-12 box">
                    <table>
                        <tr>
                            <td> <b>Balance</b> </td>
                            <td>: 60</td>
                        </tr>
                        <tr>
                            <td> <b> Account Number</b> </td>
                            <td>: 45879652354</td>
                        </tr>
                    </table>
                 </div>
                <center className="">
                    <h2>{this.state.customerDetails.name}</h2>    
                    <p>{this.state.customerDetails.address}</p>    
                </center> 
                <div>

                </div>
                <div className="">
                    <div className="btn-group groupButton" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary " onClick={(event)=>this.onCardClicks(event)} >Card Payment</button>
                        <button type="button" className="btn btn-secondary" onClick={(event)=>this.onMobileClicks(event)} >Mobile Payment</button>
                    </div>
                </div>
                {
                    this.ShowPayment()
                }
            </div>
        );
    }
}


