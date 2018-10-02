import React,{Component} from 'react';
//import '../css/Form1_home.css'
import axios from 'axios';
//import Student_FormI_1 from './Student_FormI_1';
//import Student_FormI1_View from "./Student_FormI1_View";
import RouteHandler_Add from "./RouteHandler_Add";
import RouteHandler_View from "./RouteHandler_view";
//implement Student_FormI1_Home component
export default class RouteHandler extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stop: [],
    };
        this.getAllStops();
    }

    // implement axios function to get all student details from the database and set the state of student array.
    getAllStops() {
        axios.get('http://localhost:3001/SPM/student_I1/').then(res => {
            this.setState({
                stop: res.data.data

            });
            console.log(res.data.data);
        })
    }
    // implement axios function to post all student details of form I-1.
    addStopsDetails(stop) {
        axios.post('http://localhost:3001/SPM/student_I1/', {
        routeNo: stop.routeNo,
        routeName:stop.routeName,
        previous:stop.previous,
        new:stop.new,
        next:stop.next})
        .then(result => {
            if(result.status === 200) {
                this.getAllStops();
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
                    <h1>Ticketing System - Bus Route Details</h1>
                </center>
                <div className="col-md-12">
                    <div className="light">
                        <div class="well" align="center">

                            <center>

                                {/*Render the RouteHandler_Add component and RouteHandler_View component.*/}
                                <RouteHandler_Add addStopsDetails={stop => this.addStopsDetails(stop)}/>
                                <RouteHandler_View stop={this.state.stop} getAllStops = {() => this.getAllStops()} />

                            </center>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
