
import React,{Component} from 'react';
import PropTypes from "prop-types";
import '../../css/startJourney.css';
import '../../css/Route.css';
import { Link } from 'react-router-dom';
//implement RouteHandler_Add component
export default class RouteHandler_Add extends Component{

    static get propTypes() {
        return {
            addStopsDetails: PropTypes.func,
            routeNo: PropTypes.string,
            routeName: PropTypes.string,
            routeDistance: PropTypes.string,
            busFair: PropTypes.string,
            starting_point: PropTypes.string,
            ending_point: PropTypes.string
           }
    }
    constructor(props) {
        super(props);
    }
    //implement methods to set the values given as user inputs.
    onRouteNoChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.routeNo = event.target.value;
    }
    onRouteNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.routeName = event.target.value;
    }
    onrouteDistanceChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.routeDistance = event.target.value;
    }
    onbusfairChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.busFair = event.target.value;
    }
    onstartingPointChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.starting_point = event.target.value;
    }
    onendpointChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.ending_point = event.target.value;
    }
//After submitting the details, set the values using addFormI_1Details method.
    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.routeNo &&
            this.routeName &&
            this.previous &&
            this.new &&
            this.next ) {
            this.props.addFormI_1Details({
                routeNo:this.routeNo,
                routeName: this.routeName,
                previous:this.previous,
                new:this.new,
                next:this.next
            });
            this.setState({
                routeNo:'',
                routeName: '',
                previous :'',
                new:'',
                next :''
            });
            alert("Successfully inserted.....!")
        }
    }
//render the Route form fields
    render(){
        return(
            <div className="col-md-4 col-md-offset-4">
                <form className="form-horizontal" onSubmit={event => this.onSubmit(event)} >
                    <fieldset>
                        <center>
                            <legend><h4>Add new Bus Route Details</h4></legend>
                        </center>

                            <div className="form-group row">
                                <table>
                                    <tr>
                                        <td>
                                            <div className="form-group col-md-9" style={{width:"100%" , margin:"0px 0px 0px -10px"}} >
                                                <label htmlFor="exampleInputEmail1">Route No:</label><br/>
                                                <input type="text" size={500}  className="form-control" required="required" id="pid" aria-describedby="emailHelp" placeholder="Enter Route No Here" onChange={event => this.onRouteNoChange(event)}/><br/>
                                            </div>
                                        </td>
                                    </tr>
                                     <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Route Name:</label><br/>
                                            <input type="text" required="required" className="form-control" id="pid" aria-describedby="emailHelp" placeholder="Enter Route Name Here" 
                                            onChange={event => this.onRouteNameChange(event)}/><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Route Distance:</label>
                                            <input type="text" required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter Route Distance Here" 
                                            onChange={event => this.onrouteDistanceChange(event)}/><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Bus Fare:</label>
                                            <input type="text" required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter Bus Fare Here" 
                                            onChange={event => this.onbusfairChange(event)}/><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Starting Point:</label>
                                            <input type="text" required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter Starting Point Here" 
                                            onChange={event => this.onstartingPointChange(event)}/><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">End Point:</label>
                                            <input type="text" required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter End Point Here" 
                                            onChange={event => this.onendpointChange(event)}/><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-12">
                                           <label for="file">Upload a image:</label>
                                           <input type="file" name="file1"/>
                                        </div>
                                    </tr> 
                                    <tr>
                                        <div className="form-group col-md-12">
                                                <button type="submit" className="btn btn-success btn-block" >Submit Details</button>
                                        </div>
                                    </tr>
                                       

                                </table>
                                
                            </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
