
import React,{Component} from 'react';
import PropTypes from "prop-types";

//implement BusStopHandler_Add component
export default class BusStopHandler_Add extends Component{

    static get propTypes() {
        return {
            addStopsDetails: PropTypes.func,
            routeNo: PropTypes.string,
            routeName: PropTypes.string,
            previous: PropTypes.string,
            new: PropTypes.string,
            next: PropTypes.string
           

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

    onPreviousChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.previous = event.target.value;

    }
    onNewChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.new = event.target.value;

    }
    onNextChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.next = event.target.value;

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
                
                this.props.addFormI_1Details({routeNo:this.routeNo,
                                              routeName: this.routeName,
                                              previous:this.previous,
                                              new:this.new,
                                              next:this.next});

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

///render the formI-1 fields
    render(){
        return(
            <div className="col-md-4 col-md-offset-4">
                <form className="form-horizontal" onSubmit={event => this.onSubmit(event)} >
                    <fieldset>
                        <center>
                            <legend><h4>Add new Bus Stop Details</h4></legend>
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
                                        <td>
                                            <div className="col-md-3  searchButton" style={{width:"90%", margin:"30px"}}>
                                                <button type="submit" className="btn btn-success btn-block" >Search</button> 
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
                                            <label htmlFor="exampleInputEmail1">Previous Bus Stop:</label>
                                            {/* <input type="text" required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter Previous Bus Stop Here" 
                                            onChange={event => this.onPreviousChange(event)}/><br/> */}
                                                <select name="PreBusStop" id="PreBusStop" class="form-control">
                                                    <option>
                                                        Select Previous Bus Stop
                                                    </option>
                                                </select>

                                        </div>
                                    </tr>

                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">New Bus Stop:</label>
                                            <input type="number"  required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter New Bus Stop Here" 
                                            onChange={event => this.onNewChange(event)}/><br/>
                                        </div>
                                    </tr>

                                    <tr>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="exampleInputEmail1">Next Bus Stop:</label>
                                            {/* <input type="number"  required="required" className="form-control" id="pid"
                                             aria-describedby="emailHelp" placeholder="Enter Next Bus Stop Here" 
                                             onChange={event => this.onNextChange(event)}/><br/> */}

                                             <select name="NextBusStop" id="NextBusStop" class="form-control">
                                                    <option>
                                                        Select Next Bus Stop
                                                    </option>
                                                </select>
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
