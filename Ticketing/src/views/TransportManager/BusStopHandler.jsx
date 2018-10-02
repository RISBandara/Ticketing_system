import React,{Component} from 'react';
import axios from 'axios';
import BusStopHandler_View from "./BusStopHandler_View";
import BusStopHandler_Add from "./BusStopHandler_Add"

//implement BusStopHandler component
export default class BusStopHandler extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stop: [],

        };
        this.getAllStops();
        
    }

    // implement axios function to get all bus stops details from the database and set the state of the stop array.
    getAllStops() {
        axios.get('http://localhost:3001/SPM/student_I1/').then(res => {
            this.setState({
                stop: res.data.data

            });
            console.log(res.data.data);
        })
    }

    // implement axios function to post all stop details.
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
            // Bus Stop Home Page
            <div className="F1_Stu_Home">

                <center>
                    <h1>Ticketing System - Bus Stop Details</h1>
                </center>


                <div className="col-md-12">
                    <div className="light">
                        <div class="well" align="center">

                            <center>

                                {/*Render the BusStopHandler_Add component and BusStopHandler_View component.*/}
                                <BusStopHandler_Add addStopsDetails={stop => this.addStopsDetails(stop)}/>
                                <BusStopHandler_View stop={this.state.stop} getAllStops = {() => this.getAllStops()} />

                            </center>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
