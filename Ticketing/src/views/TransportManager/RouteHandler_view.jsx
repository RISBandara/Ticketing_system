import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
//import Student_FormI1_Edit from "./Student_FormI1_Edit";
//implement RouteHandler_View component
export default class RouteHandler_View extends Component {

    static get propTypes() {
        return {
            stop: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {

        this.stop = this.props.stop;

            //render a table to view route adding form
             return <div className="container">
                <div className="card border-info mb-3">
                    <div className="card-header"></div>
                        <div className="card-body">
                            <div  style={{margin:"-70px -33px 0px -45px"}}>
                                <table className="table table-hover">
                                    <caption ><h4 align="center">You can update your details from here</h4></caption>
                                        <thead>
                                            <tr className="table-info">
                                                <th scope="row">Route No</th>
                                                <th scope="row">Route Name</th>
                                                <th scope="row">Route Distance</th>
                                                <th scope="row">Starting Point</th>
                                                <th scope="row">End Point</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {
                                                    // this.student.map(student =>
                                                    // {
                                                    //     return <Student_FormI1_Edit key={student.address} student={student} getAllUsers={() => this.props.getAllUsers()}/>
                                                    // })
                                                }
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

    }
}
