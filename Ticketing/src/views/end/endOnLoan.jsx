import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Upper from '../upperImage'

import '../../css/end.css'
import BaseUrl from "../../constatnts/base-url";

export default class endOnLoan extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
       /* BaseUrl.get('users/' + localStorage.getItem("user")).then(res => {
            console.log("Success");

            var user = {
                name: res.data["name"],
                nic: res.data["nic"],
                dob: res.data["dob"],
                type: res.data["type"],
                username: res.data["username"],
                password: res.data["password"],
                role: res.data["role"],
                balance: localStorage.getItem("balance")
            }
            console.log(user)
            BaseUrl.post('users', user).then(res => {
                console.log(res.data)
            }).catch(error => {

            })

        }).catch(error => {

        })*/
    }

    render() {
        return <div className="end">
            <Upper/>
            <div className="col-sm-12 UserHeader">
            </div>
            <div className="col-sm-12 box">
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
                <br/>
                <center>
                    <p>Please Recharge your account</p>
                </center>

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
                    <Link to='/home'>
                        <button className="btn btn-default okButton center-block">Ok</button>
                    </Link>
                </div>
            </center>


        </div>
    }
}