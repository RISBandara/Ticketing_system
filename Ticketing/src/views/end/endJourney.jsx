import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Upper from '../upperImage'

import '../../css/end.css'
import BaseUrl from "../../constatnts/base-url";

export default class endJourney extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loanBtn: false,
            payCash: false,
            okBtn: false
        }
    }

    componentDidMount() {

        var journey = {
            user: localStorage.getItem("user"),
            startPoint: localStorage.getItem("start"),
            startPoint_lat: localStorage.getItem("start_lat"),
            startPoint_long: localStorage.getItem("start_long"),
            start_time: localStorage.getItem("start_time"),
            endPoint: localStorage.getItem("end"),
            endPoint_lat: localStorage.getItem("end_lat"),
            endPoint_long: localStorage.getItem("end_long"),
            end_time: localStorage.getItem("end_time"),
            distance: localStorage.getItem("distance"),
            fare:0.0,
            balance:0.0
        }

        console.log(journey);

         BaseUrl.post('journey',journey).then(res=>{
             console.log("Success");

             localStorage.setItem("fare",res.data["fare"]);
             localStorage.setItem("balance",res.data["balance"]);

             /*
             */
             // this.notifySuccess("Successfully Submitted.!")
         }).catch(error=>{

         });

         var username=localStorage.getItem("user");
        BaseUrl.get('users/'+username).then(res=>{
            console.log("Success");

            localStorage.setItem("user_balance",res.data["balance"]);
            console.log(res.data["balance"]);

            /*
                         localStorage.setItem("fare",res.data["fare"]);
           */
            // this.notifySuccess("Successfully Submitted.!")
        }).catch(error=>{

        })


        this.setState({});

        if (localStorage.getItem("balance")<0.0) {
            this.setState({loanBtn: true});
            this.setState({payCash: true});
            this.setState({loanBalance:localStorage.getItem("balance")})
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
            <div className="col-sm-12 box">
                <table>
                    <tr>
                        <td>Journey Total:</td>
                        <td><b>{localStorage.getItem("fare")}</b></td>
                    </tr>
                    <tr>
                        <td>Account Balance:</td>
                        <td><b>{localStorage.getItem("user_balance")}</b></td>
                    </tr>

                </table>

                {
                    this.Onloan()
                }
                {
                    this.Oncash()
                }

            </div>

            <div className="col-sm-12 box">
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
                <div className="col-md-12">

                    {
                        this.onOk()
                    }

                </div>
            </center>

        </div>
    }
}