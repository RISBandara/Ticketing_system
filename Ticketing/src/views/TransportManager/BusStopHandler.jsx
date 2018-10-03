import React,{Component} from 'react';
import axios from 'axios';
import BusStopHandler_Add from "./BusStopHandler_Add"
import Upper from '../upperImage';
//implement BusStopHandler component
export default class BusStopHandler extends Component{

   
    render(){
        return(
            
            <div className="F1_Stu_Home">

                <center>
                    <h1>Bus Halt Details</h1>
                </center>
                <Upper/>

                <div className="col-md-12">
                    <div className="light">
                        <div class="well" align="center">

                            <center>
                                {/*Render the BusStopHandler_Add component and BusStopHandler_View component.*/}
                                <BusStopHandler_Add/>                   
                            </center>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
