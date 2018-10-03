
import React,{Component} from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

export default class busfareHandler extends Component{

  

    constructor(props) {
        super(props);
    
    }

    render(){
        this.busfare = this.props.busfare;
        return(
            <div className="col-md-4 col-md-offset-4">
                
                    <fieldset>
                        <center>
                            <legend><h4>Change Bus Fare</h4></legend>
                        </center>

                            <div className="form-group row">
                                <table>
                                    <tr>
                                        <td>
                                            <div className="form-group col-md-9" style={{width:"100%" , margin:"0px 0px 0px -10px"}} >
                                                <label htmlFor="exampleInputEmail1">Route No:</label><br/>
                                                <input type="text" size={500}  className="form-control" required="required" id="pid" aria-describedby="emailHelp"  onChange={this.handleChange}/><br/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-3  searchButton" style={{width:"90%", margin:"30px"}}>
                                                <button type="submit" className="btn btn-success btn-block" >Search</button> 
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Route Name:</label><br/>
                                            <label htmlFor="exampleInputEmail1">{this.routename}</label><br/>
                                            {/* <input type="text" required="required" className="form-control" id="pid" aria-describedby="emailHelp" readOnly="true" 
                                           /><br/> */}
                                        </div>
                                    </tr>
                                    
                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Date:</label><br/>
                                            <input type="date" required="required" className="form-control" id="pid" aria-describedby="emailHelp" 
                                            onChange={event => this.ondateChange(event)}/><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">currentfare:</label>
                                            <input type="text" required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" readOnly="true" 
                                            onChange={event => this.oncurrentfareChange(event)}/><br/>
                                        </div>
                                    </tr>

                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Update Percentage:</label>
                                            <input type="number"  required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter Update Percentage Here" 
                                            onChange={event => this.onupdatevalueChange(event)}/><br/>
                                        </div>
                                        <td>
                                            <div className="col-md-3  searchButton" style={{width:"100%", marginTop:"-10px",marginLeft:"20px"}}>
                                                <button type="submit" className="btn btn-success btn-block" >Calculate New Fare</button> 
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">New Bus Fare:</label>
                                            <input type="number"  required="required" className="form-control" id="pid"
                                             aria-describedby="emailHelp" readOnly="true" 
                                             onChange={event => this.onnewfareChange(event)}/><br/>
                                        </div>
                                    </tr>

                                    
                                    <tr>
                                            <button type="submit" className="btn btn-success btn-block" style={{width:"90%"}} >Submit Details</button>
                                    </tr>

                                </table>
                            </div>
                    </fieldset>
               
            </div>


        );
    }
}
