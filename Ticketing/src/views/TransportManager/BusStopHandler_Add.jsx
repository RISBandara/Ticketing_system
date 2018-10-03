
    import React,{Component} from 'react'; 
    import '../../css/startJourney.css';
    import '../../css/Route.css';
    import axios from 'axios';
    
     
       
        export default class busStopHandler_Add extends React.Component {
        
            constructor(props){
                super(props);
                this.state={Routehalt:[{irouteno:'127'},{irouteno:'177'},{irouteno:'143'},],
                assign:[],term:''}
                
            }
        
            componentDidMount(){
                
                axios.get('http://localhost:8000/students')
                .then(res => {
                    this.setState({company:res.data});
                    console.log(res.data)
                });
            
            
            }
        
            handleClick(){
                var Routeno = this.refs.routeno.value;
                var Locations = this.refs.location.value;
                var Nexthalt = this.refs.nexthalt.value;
                var Previoushalt = this.refs.previoushalt.value;
            
        
                axios.get("http://localhost:8000/assign/" + Routeno).then((res) => {
        
                    if (res.data.length !== 0) {
                        alert("Student is already registered.")
                    }
                    else {
        
        
        
                      
                        var halt = {"irouteno":Routeno,"ilocation":Locations,"inexthalt":Nexthalt,"ipreviousehalt":Previoushalt};
                
                        this.setState({assign:halt});
                
                       //check user fields
                        if(Locations==='' || Nexthalt===''|| Previoushalt===''){
                            alert('Enter Correct details');
                        }
                        else{
                            
                            axios.post('http://localhost:8000/assign',halt).then(function(data){
                            
                            alert("Assign Succesfully !!!");
                        });
                                
                            }
                }
                })
        
            };
            render() {
                return (
                    <div style={{marginLeft:'5px',marginRight:'5px',padding:'4px'}}>
                    <h4>Manage Bus Halts</h4>
                    <div className="card border-info">
                        <form style={{textAlign:'left'}}>
                           
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <label className="col-form-label">Route No  </label>
                                            <select className="form-control" ref='routeno'>
                                               {this.state.Routehalt.map(routes=>
                                                   <option>
                                                      {routes.irouteno}
                                                     </option>
                                                                 )}
                                             </select>
                                        </div>  
                                    </div>
                                   </div>
                                   </div>
                            
                            <div className="card-body">
                                
                                <div className="row"> 
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <label className="col-form-label">Location  </label>
                                            <input type="text" className="form-control " ref="location" required="required" placeholder=" Current halt "/>
                                        </div>  

                                            <div className="form-group ">
                                            <label className="col-form-label">Next Halt  </label>
                                            <input type="text" className="form-control " ref="nexthalt" required="required" placeholder="Next Halt "/>
                                        </div> 
                                        
                                        <div className="form-group ">
                                            <label className="col-form-label">Previous Halt </label>
                                            <input type="text" className="form-control " ref="previoushalt" required="required" placeholder="Previous halt "/>
                                        </div> 
                                    </div>
                    
                                    </div>
                                
                                <div className="form-group text-right">
                                    <button onClick={this.handleClick.bind(this)} className="btn btn-info pull-right">Submit </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                );
            }
        }
        
        