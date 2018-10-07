import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Upper from '../upperImage'

import '../../css/end.css'
import ReactDOM from "react-dom";
import BaseUrl from "../../constatnts/base-url";

export default class endJourney extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customerDetails: [],
            journeyTotal: 20,
            accBalance: 17,
            loanBalance: 0,
            loanBtn: false,
            payCash: false,
            okBtn: false
        }
    }

    componentWillMount() {

        var journey = {
            user: localStorage.getItem("username"),
            startPoint: localStorage.getItem("start"),
            startPoint_lat: localStorage.getItem("start_lat"),
            startPoint_long: localStorage.getItem("start_long"),
            start_time: localStorage.getItem("start_time"),
            endPoint: localStorage.getItem("end"),
            endPoint_lat: localStorage.getItem("end_lat"),
            endPoint_long: localStorage.getItem("end_long"),
            end_time: localStorage.getItem("end_time"),
            distance: localStorage.getItem("distance"),
            fare:0.0
        }

        console.log(journey);

         BaseUrl.post('journey',journey).then(res=>{
             console.log("Success");

             localStorage.setItem("fare",res.data["fare"]);
/*
*/
             // this.notifySuccess("Successfully Submitted.!")
         }).catch(error=>{

         });

         var username=localStorage.getItem("username");
        BaseUrl.get('users/'+username).then(res=>{
            console.log("Success");

            localStorage.setItem("balance",res.data["balance"]);
            var loan = localStorage.getItem("fare")-localStorage.getItem("balance")
            localStorage.setItem("loan",loan);
            /*
                         localStorage.setItem("fare",res.data["fare"]);
            */
            // this.notifySuccess("Successfully Submitted.!")
        }).catch(error=>{

        })


        this.setState({});

        if (localStorage.getItem("fare") > localStorage.getItem("balance")) {
            this.setState({loanBtn: true});
            this.setState({payCash: true});
            this.setState({loanBalance: localStorage.getItem("fare") - localStorage.getItem("balance")})
        }
        else
            this.setState({okBtn: true});
    }

    onLoanClicked = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/endOnLoan`);
    };

    Onloan = () => {
        if (this.state.loanBtn === true) {
            return (
                <Link to='/endOnLoan'>
                    <center>
                        <input type="button" className="btn btn-default okButton center-block"
                               onClick={event => this.onLoanClicked(event)} value="Get A Loan"/>
                    </center>
                </Link>
            );
        }
    }

    onOk = () => {
        if (this.state.okBtn === true) {
            return (
                <Link to='/home'>
                    <button className="btn btn-default okButton center-block">Ok</button>
                </Link>
            )
        }
    }

    Oncash = () => {
        if (this.state.payCash === true) {
            return (
                <Link to='/home'>
                    <button className="btn btn-default okButton center-block">PayCash</button>
                </Link>
            );
        }
    }


    render() {

        return <div className="end">
            <Upper/>
            <div className="col-sm-12 UserHeader">
                <center>
                    <h2>{localStorage.getItem("name")}</h2>
                    <p>{localStorage.getItem("address")}</p>
                </center>
            </div>
            <div className="col-sm-12 box center">
                <table>
                    <tr>
                        <td>Journey Total:</td>
                        <td><b>{localStorage.getItem("fare")}</b></td>
                    </tr>
                    <tr>
                        <td>Account Balance:</td>
                        <td><b>{localStorage.getItem("balance")}</b></td>
                    </tr>

                </table>
                <br />
                    
                

            </div>
            {
                    this.Onloan()
            }  
            <br />

            <div className="col-sm-12 box" style={{backgroundColor:"lightslategray"}}>
                <table>
                    <tr>
                        <td>From:</td>
                        <td><b>{localStorage.getItem("start")}</b></td>
                    </tr>
                    <tr>
                        <td>To:</td>
                        <td><b>{localStorage.getItem("end")}</b></td>
                    </tr>
                </table>


            </div>

            <center>
            <div className="col-md-12" style={{backgroundColor:"lightslategray"}}>
                
                    {
                        this.onOk()
                    }

                </div>
            </center>

        </div>
    }
}