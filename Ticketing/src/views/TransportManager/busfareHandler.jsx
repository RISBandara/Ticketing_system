
import React,{Component} from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
//implement Student_FormI_1 component
export default class busfareHandler extends Component{

    static get propTypes() {
        return {
                    busfare: PropTypes.array,
                    addFareDetails: PropTypes.func,
                    routeno: PropTypes.string,
                    routename: PropTypes.string,
                    currentfare: PropTypes.string,
                    percentage: PropTypes.string,
                    busfair: PropTypes.string
           

        }

    }

    constructor(props) {
        super(props);
        this.busfare = this.props.busfare;
    }

    //implement methods to set the values given as user inputs.
   
    handleChange = event => {
        this.setState({ routeno: event.target.value });
        
      }
    


    onRouteNoChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.routeno = event.target.value;


    }
    onroutenameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.routename = event.target.value;

    }

    oncurrentfareChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.currentfare = event.target.value;

    }

    onupdatevalueChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.percentage = event.target.value;

    }
    onnewfareChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.busfair = event.target.value;

    }
    ondateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.busfair = event.target.value;

    }
     handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://localhost:3002/busfares/${this.state.routeno}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

//After submitting the details, set the values using addFormI_1Details method.
    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (
            this.routeno &&
            this.routename &&
            this.currentfare &&
            this.percentage &&
            this.busfair ) {
                
                this.props.addFareDetails({
                                            routeno: this.routeno,
                                            routename: this.routename,
                                            currentfare:this.currentfare,
                                            percentage:this.percentage,
                                            busfair:this.busfair });

            this.setState({
                routeno:'',
                routename: '',
                currentfare :'',
                percentage:'',
                busfair :''
            });

            alert("Successfully Saved.....!")

        }
    }

///render the formI-1 fields
    render(){
        this.busfare = this.props.busfare;
        return(
            <div className="col-md-4 col-md-offset-4">
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <fieldset>
                        <center>
                            <legend><h4>Add new Bus Fare Details</h4></legend>
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
                </form>
            </div>


        );
    }
}
