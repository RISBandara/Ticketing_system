import React,{Component} from 'react';
import { Link } from 'react-router-dom';

//implements Student_Main_Page component
export default class TransportManagerMain extends Component{

    render(){
        return(
            // Student Home Page
            <div className="F1_Stu_Main">

                <center>
                    <h1>Ticketing System - Welcome to Transport Manager Main Page</h1>
                </center>

                <div className="col-md-12">
                    <div className="light">
                        <div className="well">
                            <h3 align="center">Transport Manager Main Page</h3>
                            &nbsp;
                                <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                    {/*Apply link to navigate the student Form I-1 home page*/}
                                    <Link to='/Student_FormI1_Home'>
                                        <button type="button" className="btn btn-primary btn-lg">Analyze Route Data
                                        </button>
                                    </Link>
                                </div>

                               <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                   {/*Apply link to navigate the student home  Form I-3 page*/}
                                   <Link to='/RouteHandler'>
                                        <button type="button" className="btn btn-primary btn-lg">Route Details
                                        </button>
                                    </Link>
                                </div>

                                <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                    {/*Apply link to navigate the student home  Form I-3 page*/}
                                    <Link to='/BusStopHandler'>
                                        <button type="button" className="btn btn-primary btn-lg">Bus Stops Details
                                        </button>
                                    </Link>
                                </div>

                                <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                    {/*Apply link to navigate the student home  Form I-3 page*/}
                                    <Link to='/busfareMain'>
                                        <button type="button" className="btn btn-primary btn-lg">Update Bus Fare Details
                                        </button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
