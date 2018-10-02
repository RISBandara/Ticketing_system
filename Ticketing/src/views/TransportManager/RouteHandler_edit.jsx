import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

//implement Student_FormI1_Edit component
export default class RouteHandler_edit extends Component {

    static get propTypes() {
        return {
            stop: PropTypes.object,
            getAllStops: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.stop = this.props.stop;
        this.getAllStops = this.props.getAllStops;
    }

    // implement axios function to update student details of form I-1.
    // update(sid, studentName,address,homePhone,mobilePhone,email,semester,year_,cgpa) {

    //     var updatedAddress = prompt("Please enter updated Address:", address);
    //     var updatedHomePhone = prompt("Please enter updated Home Phone:", homePhone);
    //     var updatedMobilePhone = prompt("Please enter updated Mobile Phone:", mobilePhone);
    //     var updatedEmail = prompt("Please enter updated Email:", email);
    //     var updatedCgpa = prompt("Please enter updated CGPA:", cgpa);

    //     axios.put('http://localhost:3001/SPM/student_I1/' + sid, {

    //         address:updatedAddress,
    //         homePhone:updatedHomePhone,
    //         mobilePhone:updatedMobilePhone,
    //         email:updatedEmail,
    //         cgpa:updatedCgpa}).then(results => {

    //             if(results.status == 200) {
    //                 this.getAllStops();
    //             }
    //         })
    // }

    delete(id) {
        axios.delete('http://localhost:8083/alergy/' + id).then(results => {
            if(results.status == 200) {
                this.getAllStops();
            }
        })
    }
    render() {
        return <tr>
                    <td>{this.stop.routeNo}</td>
                    <td>{this.stop.routeName}</td>
                    <td>{this.stop.previous}</td>
                    <td>{this.stop.new}</td>
                    <td>{this.stop.next}</td>

                    <button className="btn btn-outline-info" 
                    onClick={(e) => this.delete(this.stop._id)}>Delete</button>
                    &nbsp;
                </tr>
                }
}

