import React,{Component} from 'react';
//import '../css/Form1_home.css'

import axios from 'axios';

import Busfarehandler from "./busfareHandler"
import BusfareView from "./busfareView"

export default class busfareMain extends Component{

    constructor(props) {
        super(props);
        this.state = {
            busfare: [],

        };
        this.getAllFare();
    }

    // implement axios function to get all student details from the database and set the state of student array.
    getAllFare() {
        axios.get('http://localhost:3001/SPM/student_I1/').then(res => {
            this.setState({
                busfare: res.data.data

            });
            console.log(res.data.data);
        })
    }

    // implement axios function to post all student details of form I-1.
    addFareDetails(busfare) {
        axios.post('http://localhost:3001/SPM/student_I1/', {
            date: busfare.date,
            routeno: busfare.routename,
            routename: busfare.routename,
            currentfare: busfare.currentfare,
            percentage: busfare.percentage,
            busfair: busfare.busfair})
        .then(result => {
            if(result.status === 200) {
                this.getAllFare();
            }
        }).catch(err => {
            alert(err);
        })
    }

    render(){
        return(
            // Student Home Page
            <div className="F1_Stu_Home">

                <center>
                    <h1>Ticketing System - Bus Fare Details</h1>
                </center>


                <div className="col-md-12">
                    <div className="light">
                        <div class="well" align="center">

                            <center>

                                {/*Render the Student_FormI_1 component and Student_FormI1_View component.*/}
                                <Busfarehandler addFareDetails={busfare => this.addFareDetails(busfare)}/>
                                <BusfareView busfare={this.state.busfare} getAllFare = {() => this.getAllFare()} />
                             
                            </center>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
