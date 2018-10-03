import React,{Component} from 'react';
import axios from 'axios';
import Busfarehandler from "./busfareHandler";

export default class busfareMain extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            // Student Home Page
            <div className="F1_Stu_Home">

                <center>
                    <h1>Bus Fare Details</h1>
                </center>


                <div className="col-md-12">
                    <div className="light">
                        <div class="well" align="center">

                            <center>

                                {/*Render the Student_FormI_1 component and Student_FormI1_View component.*/}
                                <Busfarehandler/>

                            </center>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
