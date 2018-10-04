import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Upper from '../upperImage'
import queryString from 'query-string'

import '../../css/end.css'

export default class endJourney extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customerDetails: [],
            journeyTotal: 20,
            accBalance: 17,
            loanBalance: 0,
            loanBtn: false,
            okBtn: false
        }
    }

    componentWillMount() {
        const values = queryString.parse(this.props.location.search)
        this.setState({
            customerDetails: values.user,

        });

        if (this.state.journeyTotal > this.state.accBalance) {
            this.setState({loanBtn: true});
            this.setState({loanBalance: this.state.journeyTotal - this.state.accBalance})
        }
        else
            this.setState({okBtn: true});
    }

    onLoanClicked = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/endOnLoan?customerName=${this.state.customerDetails.name}&customerAddress=${this.state.customerDetails.Address}&phone=${this.state.customerDetails.phone}&loanBalance=${this.state.loanBalance}&journeyTotal=${this.state.journeyTotal}`);
    }

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



    render() {

        return <div className="end">
            <Upper/>
            <div className="col-sm-12 UserHeader">
                <center>
                    <h2>{this.state.customerDetails.name}</h2>
                    <p>{this.state.customerDetails.Address}</p>
                </center>
            </div>
            <div className="col-sm-12 box">
                <table>
                    <tr>
                        <td>Journey Total:</td>
                        <td><b>{this.state.journeyTotal}</b></td>
                    </tr>
                    <tr>
                        <td>Account Balance:</td>
                        <td><b>{this.state.accBalance}</b></td>

                    </tr>

                </table>

                {
                    this.Onloan()
                }

            </div>

            <div className="col-sm-12 box">
                <table>
                    <tr>
                        <td>From:</td>
                        <td><b>Kaduwela</b></td>
                    </tr>
                    <tr>
                        <td>To:</td>
                        <td><b>Sliit, Malabe</b></td>
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