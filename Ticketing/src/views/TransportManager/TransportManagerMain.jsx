import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Upper from '../../images/logo.jpg';

export default class TransportManagerMain extends Component{

    render(){
        return(
           
            <div className='well'style={{backgroundColor:'black'}}>

                <center>
                    <h1>================</h1>
                </center>

                <div className="col-md-12 col-sm-10">
                    <div className="light">
                        <div className="well">
                            <h3 align="center">Transport Management Home Page</h3>
                            &nbsp;
                            <img src={require('../../images/logo.jpg')} alt="" width="100%"/><br/><br/>
                            
                              <div style={{margin: "10px 0px 0px 0px"}}>

                                   <Link to='/Analyse'>
                                   <button style={{height:'50px'}} type="button" className="btn btn-md btn-success form-control">Analyze Route Data</button>
                                   </Link>
                               </div>

                                 <div style={{margin: "10px 0px 0px 0px"}}>


                                    <Link to='/RouteHandler'>
                                     <button type="button"style={{height:'50px'}} className="btn btn-md btn-success form-control">Add New Route </button>
                                    </Link>
                                    </div>
                            
                               

                                <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                   
                                    <Link to='/BusStopHandler'>
                                        <button type="button" style={{height:'50px'}} className="btn btn-md btn-success form-control">Bus Stops Details
                                        </button>
                                    </Link>
                                </div>

                                <div style={{margin: "10px 0px 0px 0px"}} align="center">

                                    
                                    <Link to='/busfareMain'>
                                        <button type="button" style={{height:'50px'}} className="btn btn-md btn-success form-control">Update Bus Fare Details
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
