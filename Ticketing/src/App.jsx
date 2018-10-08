import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { ToastContainer } from 'react-toastify';
import StartHome from './views/start/startHome'
import StartJourney from './views/start/startJourney'
// import History from './views/history/history'
// import Recharge from './views/recharge/recharge'
import OnJourney from './views/start/onJourney'
//
import EndJourney from './views/end/endJourney'
import EndOnLoan from './views/end/endOnLoan'
import EndJourneyQR from './views/end/endJourneyQR'
import {MapContainer} from "./views/login & account creation/map";
//
//
// import TransportManagerMain from './views/TransportManager/TransportManagerMain'
// import RouteHandler from './views/TransportManager/RouteHandler'
// import busfaremain from './views/TransportManager/busfareMain'
// import BusStopHandler from './views/TransportManager/BusStopHandler'

class App extends React.Component {
    render() {
        return (

                <div className="App">

                    <Router>
                    <div>
                        <div>
                            <Route path="/home"  component = {StartHome} />
                            {/*<Route path="/map"  component = {MapContainer} />*/}
                            <Route path="/startJourney"  component = {StartJourney} />
                            {/*<Route path="/Recharge" component = {Recharge} />*/}
                            {/*<Route path="/History" component = {History} />*/}
                            <Route path="/onJourney"  component = {OnJourney} />



                            <Route path="/end"  component = {EndJourney}/>





                            <Route path="/endOnLoan"  component = {EndOnLoan}/>


                            <Route path="/endQR" component = {EndJourneyQR}/>
                            {/*<Route path="/busfareMain"  component = {busfaremain} />*/}
                            {/*<Route path="/RouteHandler"  component = {RouteHandler} />*/}
                            {/*<Route path="/BusStopHandler"  component = {BusStopHandler} />*/}
                            {/*<Route path="/TMmain"  component = {TransportManagerMain} />*/}

                        </div>
                    </div>
                    </Router>
                </div>

        );
    }
}

export default App;
