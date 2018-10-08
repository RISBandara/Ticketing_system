
import React,{Component} from 'react';
import PropTypes from "prop-types";
import '../../css/startJourney.css';
import '../../css/Route.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
//implement RouteHandler_Add component
export default class BusStopHandler_Add extends Component{

    
    constructor(props) {
        super(props);
    
   
            this.setState({
                routeNo:'',
                routeName: '',
                previous :'',
                new:'',
                next :''
            });
            
        
    }

    handleClick(){
        var Routeno = this.refs.routeno.value;
        var Routename = this.refs.routename.value;
        var Routeno = this.refs.routeno.value;
        var Routedistance = this.refs.routedistance.value;
        var Busfare = this.refs.busfare.value;
        var Startpoint = this.refs.startpoint.value;
        var Endpoint = this.refs.endpoint.value;
        
        axios.get("http://localhost:8000/assign/" + Routeno).then((res) => {

            if (res.data.length !== 0) {
                alert("Student is already registered.")
            }
            else {

                var assignment = {"irouteno":Routeno,"iroutename":Routename,"ibusfare":Busfare,"istartpoint":Startpoint,"iendpoint":Endpoint,"idistance":Routedistance};
        
                this.setState({assign:assignment});
        
               //check user fields
                if(Routeno==='' || Routename===''|| Routedistance==='' || Startpoint==='' || Endpoint===''||Busfare===''){
                    alert('Enter Correct details');
                }
                else{
                    
                    axios.post('http://localhost:8000/assign',assignment).then(function(data){
                    
                    alert("Assign Succesfully !!!");
                });
                        
                    }
        }
        })

    };
//render the Route form fields
    render(){
        return(
            <div className="col-md-4 col-md-offset-4">
                <form className="form-horizontal" >
                    <fieldset>
                        <center>
                            <legend><h4>Add New Bus Halt</h4></legend>
                        </center>

                            <div className="form-group row center" style={{color:'black'}}>
                                <table>
                                    <tr>
                                        <td>
                                            <div className="form-group col-md-8" style={{width:"100%" , margin:"0px 0px 0px -10px"}} >
                                                <label htmlFor="exampleInputEmail1">Route No:</label><br/>
                                                <input type="text" size={500} ref='routeno' className="form-control" required="required" id="pid" aria-describedby="emailHelp" placeholder="Enter Route No Here"/><br/>
                                            </div>
                                        </td>
                                    </tr>
                                     <tr>
                                        <div className="form-group col-md-8"style={{width:"100%" , margin:"0px 0px 0px -10px"}}>
                                            <label htmlFor="exampleInputEmail1">Route Name:</label><br/>
                                            <input type="text" size={500} required="required" ref='routename' className="form-control" id="pid" aria-describedby="emailHelp" placeholder="Enter Route Name Here" /><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-9" style={{width:"100%" , margin:"0px 0px 0px -10px"}}>
                                            <label htmlFor="exampleInputEmail1">Current Halt:</label>
                                            <input type="text" required="required" className="form-control" id="pid" 
                                            aria-describedby="emailHelp" ref='currenthalt' placeholder="Enter current halt Here" /><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-9"style={{width:"100%" , margin:"0px 0px 0px -10px"}}>
                                            <label htmlFor="exampleInputEmail1">Previous Halt:</label>
                                            <input type="text" required="required" ref='previoushalt' className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter Previous halt Here" 
                                          /><br/>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-group col-md-9"style={{width:"100%" , margin:"0px 0px 0px -10px"}}>
                                            <label htmlFor="exampleInputEmail1">Next Halt:</label>
                                            <input type="text" required="required" ref='nexthalt' className="form-control" id="pid" 
                                            aria-describedby="emailHelp" placeholder="Enter Next haltHere" 
                                          /><br/>
                                        </div>
                                    </tr>
                                    
                                    <tr>
                                        <div className="form-group col-md-9" style={{width:"100%" , margin:"0px 0px 0px -10px"}}>
                                                <button onClick={this.handleClick.bind(this)} className="btn btn-primary btn-block" >Submit Details</button>
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
