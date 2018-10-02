
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import BusStopHandler_Edit from './BusStopHandler_Edit';

//implement BusStopHandler_View component
export default class BusStopHandler_View extends Component {

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

            //render a table in order to view bus stop details
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
                                                <th scope="row">Prvious Bus Stop</th>
                                                <th scope="row">New Bus Stop</th>
                                                <th scope="row">Next Bus Stop</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {
                                                    this.stop.map(stop =>
                                                    {
                                                        return <BusStopHandler_Edit key={stop.address} stop={stop} getAllStops={() => this.props.getAllStops()}/>
                                                    })
                                                }
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

    }
}
