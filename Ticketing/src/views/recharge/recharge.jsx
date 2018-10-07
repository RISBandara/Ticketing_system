import React,{Component} from 'react'
import '../../css/recharge.css'
import queryString from 'query-string' ;
import Getcode from './recharge';
import CreditCardInput from 'react-credit-card-input';
import GenerateRandomCode from 'react-random-code-generator';

export default class Reacharge extends Component{

    constructor(props){
        super(props)
        this.state= {
            customerDetails:[],
            payment : {credit : true, mobile: false},
           
        }
        
    }

    setData(e){
        e.preventDefault();
        var creditnum = document.getElementById('creditnum').value;
        var pinnum = document.getElementById('pinnum').value;

        fetch('http://localhost:3005/recharges/postrecharge', {
            method : 'post',
            headers : {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({creditnum:creditnum,pinnum: pinnum})
        }).then(function (data) {
            return data;
        }).then(function (confirm) {
            console.log(confirm);
            alert('success');
        })
    }

    setData01(e){
        e.preventDefault();
        var mobilenum = document.getElementById('mobilenum').value;
        var amount = document.getElementById('amount').value;

        fetch('http://localhost:3005/recharges/postrecharge', {
            method : 'post',
            headers : {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({mobilenum:mobilenum,amount: amount})
        }).then(function (data) {
            return data;
        }).then(function (confirm) {
            console.log(confirm);
            alert('success');
        })
    }

    //Generate random code
      genetrateCode(){
        const random= GenerateRandomCode.NumCode(4);
        alert(random);
        localStorage.setItem("random",random);
    }

    //To retrieve local storage 
    // localStorage.getItem("random")
    
    componentWillMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({customerDetails:{name:values.customerName,address:values.customerAddress,phone:values.phone}})
    }


    //Direct it to card payments when card is clicked
    onCardClicks = (event) =>{
        event.preventDefault();
        event.stopPropagation();

        this.setState({payment:{mobile:false,credit:true}})

    }

    //Direct it to Mobile payments when mobile payment is clicked
    onMobileClicks = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({payment:{mobile:true,credit:false}})

    }

    
    //Two seperate interfaces acts accordingly
    ShowPayment = () => {
        
        if(this.state.payment.credit){
            return <div>
                <center>
                    <h3>Credit Card Payment</h3>
                        <div class="form-group">

                        <label>Enter Card No :</label>
                        <CreditCardInput
                            cardNumberInputProps

                            cardExpiryInputProps
                            cardCVCInputProps
                            
                            fieldClassName="input"
                        />
                            {/* <input CreditCardInput cardNumberInputProps class="form-control single" id="creditnum" maxlength="19" placeholder="Card Number"/>
                             */}
                        </div>
                
                        <div class="form-group">
                            <label >Enter Card pin :</label>
                            <input type="password" class="form-control single" id="pinnum" maxlength="4"/>
                        </div>
                        <button type="submit" style={{backgroundColor:"gray"}} class="btn btn-default" onClick={this.setData.bind(this)}>Submit</button>
                        {/*<Getcode />*/}
                </center>
            </div>
        }else{
            return <div>
                <div className="phoneText">
                <div class="form-group">
                        <label >Mobile Number :</label>
                        <input type="number" maxLength="10" class="form-control single" id="mobilenum" required/>
                    </div>
                    <div class="form-group">
                        <label>Recharge Amount :</label>
                        <input type="text" class="form-control single" id="amount" required/>
                    </div>
                   
                    <button type="submit" className="btn btn-default getCode" onClick={this.genetrateCode.bind(this)}>Get Code</button>
                </div>

                    <div className="col-sm-12 box" style={{height:"120px"}}>
                        <table>
                            <tr>
                                <td><h5>Please enter the 4 digit code to send to your phone to proceed recharge</h5></td>
                            </tr>
                            <tr>
                                <td><center> <input type="text" class="form-control single" id="code" /></center></td>
                            </tr>
                        </table>
                 </div>
                 <button type="submit" class="btn btn-default" onClick={this.setData01.bind(this)}>Confirm payment</button>
            </div>
        }
    }

    

    render(){

        //Inline css for components
        const btn_css ={
            backgroundColor : "grey",
            border:"1px solid black",
            color : "white",
            
        };
        const header ={
            backgroundColor : "black",
            color : "white",
        };

        //Main interface
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
                    <h5>Customer Name : {this.state.customerDetails.name}</h5>
                    <p>Customer Address :{this.state.customerDetails.address}</p>
                    <hr />
                </center> 
                <div>

                </div>
                <div className="">
                    <div className="btn-group groupButton" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" style={btn_css} onClick={(event)=>this.onCardClicks(event)} >Card Payment</button>
                        <button type="button" className="btn btn-secondary" style={btn_css} onClick={(event)=>this.onMobileClicks(event)} >Mobile Payment</button>
                        {/* <button type="button" className="btn btn-secondary" style={btn_css} onClick={(event)=>this.onMobileClicks(event)} >Machine Payment</button> */}

                    </div>
                </div>
                {
                    this.ShowPayment()
                }
            </div>
        );
    }
}


