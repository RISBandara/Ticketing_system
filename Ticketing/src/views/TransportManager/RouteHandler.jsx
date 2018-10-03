import React,{Component} from 'react';
import RouteHandler_Add from "./RouteHandler_Add";
export default class RouteHandler extends Component{
  
    render(){
        return(
          
            <div className="F1_Stu_Home" style={{backgroundColor:'gray'}}>

                <center>
                    <h1>Ticketing System - Bus Route Details</h1>
                </center>
                <div className="col-md-12">
                    <div className="light">
                        <div class="well" align="center">

                            <center>
                                <RouteHandler_Add/>
                            </center>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
