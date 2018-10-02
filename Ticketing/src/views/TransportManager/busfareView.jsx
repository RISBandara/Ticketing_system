
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';

//implement the Supervisor_FormI1_View component
export default class BusfareView extends Component {

    static get propTypes() {
        return {
            route: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        // render table to view Supervisor foem I-1 details
        this.route = this.props.route;
        return <div className="busfareView">

            <div className="col-md-12" style={{margin:"0px -100px 0px 100px"}} >
                <table className="table" style={{width :"80%"}} >
                    
                        <thead>
                            <tr className="table-info" style={{marginInlineEnd:"10px"}}>
                                <th scope="row">Route No</th>
                                <th scope="row">Route Name</th>
                                <th scope="row">Date</th>
                                <th scope="row">New Bus Fare</th>
                                
                            </tr>
                        </thead>

                    {/* <tbody>
                    {
                        <tr>
                        <td>{this.supervisor.sid}</td>
                        <td>{this.supervisor.employer_name}</td>
                        <td>{this.supervisor.supervisor_Name}</td>
                        <td>{this.supervisor.employer_address}</td>
                        <td>{this.supervisor.supervisor_title}</td>
                        <td>{this.supervisor.supervisor_mobilePhone}</td>
                        <td>{this.supervisor.supervisor_email}</td>
                        <td>{this.supervisor.startDate}</td>
                        <td>{this.supervisor.endDate}</td>
                        <td>{this.supervisor.hoursPerWeek}</td>
                        <td>{this.supervisor.taskToComplete}</td>
                        <td>{this.supervisor.learnedTasks}</td>
                        </tr>
                    }

                    </tbody> */}
                </table>
            </div>
        </div>;
    }
}
