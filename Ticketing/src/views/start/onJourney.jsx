import React , {Component} from 'react'
import '../../css/onJourney.css'
import Upper from '../upperImage'
import queryString from 'query-string' ;


export default class OnJourney extends Component {
    constructor(props){
        super(props)
        this.state= {
            customerDetails:[]
        }
    }

    componentWillMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState({customerDetails:{name:values.customerName,Address:values.customerAddress,phone:values.phone}})
    }

    onEnd = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push(`/endQR?customerName=${this.state.customerDetails.name}&customerAddress=${this.state.customerDetails.Address}&phone=${this.state.customerDetails.phone}`);
    }

    render(){
        return(
            <div className="onJourney">
            <Upper/>
                <center>
                    <h2>{this.state.customerDetails.name}</h2>    
                    <p>{this.state.customerDetails.Address}</p>    
                </center>             
                <div className="box box1">
                    <table>
                        <tr>
                            <td><b>OnBoard</b></td>
                        </tr>
                        <tr>
                            <td><b>Started from kaduwela junction</b></td>
                        </tr>  
                        <tr>
                            <td>At 1.53 PM</td>
                        </tr>
                    </table>
                </div>
                <div className="box box2">
                    <table>
                        <tr>
                            <td><b>Next Stop</b></td>
                        </tr>
                        <tr>
                            <td><b>Vihara Mawatha</b></td>
                        </tr>  
                    </table>
                </div>
                <div className="box box3">
                <table>
                        <tr>
                            <td><b>Previous Stop</b></td>
                        </tr>
                        <tr>
                            <td><b>Kothalawala</b></td>
                        </tr>  
                    </table>
                </div>
                <center>
                    <button className='btn btn default' onClick={event=>this.onEnd(event)}>End Journey</button>
                </center>
            </div>
        );
    }
}