import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Upper from '../upperImage';

export default class TransportManagerMain extends Component{

    render(){
        return(
           
            <div className='well'style={{backgroundColor:'skyblue'}}>

                <center>
                    <h1>================</h1>
                </center>

                <div className="col-md-12 col-sm-10">
                    <div className="light">
                        <div className="well">
                            <h3 align="center">Transport Management Home Page</h3>
                            &nbsp;
                            <Upper/>
                            <div className="row well">
                              <div style={{margin: "10px 0px 0px 0px"}}>

                                   <Link to='/Analyse'>
                                   <button type="button" className="btn btn-md btn-success form-control">Analyze Route Data</button>
                                   </Link>
                               </div>

                            <div style={{margin: "10px 0px 0px 0px"}}>


                                    <Link to='/RouteHandler'>
                                     <button type="button" className="btn btn-md btn-success form-control">Add New Route </button>
                                    </Link>
                                    </div>
                            </div>
                               

                                <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                   
                                    <Link to='/BusStopHandler'>
                                        <button type="button"className="btn btn-md btn-success form-control">Bus Stops Details
                                        </button>
                                    </Link>
                                </div>

                                <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                    
                                    <Link to='/busfareMain'>
                                        <button type="button" className="btn btn-md btn-success form-control">Bus Fare Changes
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
