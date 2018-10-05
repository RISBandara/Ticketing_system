 import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Start from './views/start/startHome'
import startJourney from './views/start/startJourney'
import History from './views/history/history'
import Recharge from './views/recharge/recharge'
import Onjourney from './views/start/onJourney'

import End from './views/end/endJourney'
import EndOnLoan from './views/end/endOnLoan'
import EndJourneyQR from './views/end/endJourneyQR'


import TransportManagerMain from './views/TransportManager/TransportManagerMain'
import RouteHandler from './views/TransportManager/RouteHandler'
import busfaremain from './views/TransportManager/busfareMain'

import BusStopHandler from './views/TransportManager/BusStopHandler'


class App extends Component {
  render() {
    return (
      <div>       
      <Router>
        <div >
             
            <div>
                <Switch>

                    <Route path="/home" exact static component = {Start} />
                    <Route path="/startJourney" exact static component = {startJourney} />
                    <Route path="/Recharge" exact static component = {Recharge} />
                    <Route path="/History" exact static component = {History} />
                    <Route path="/onJourney" exact static component = {Onjourney} />

                  
                    <Route path="/end" exact static component = {End}/>
                    <Route path="/endOnLoan" exact static component = {EndOnLoan}/>
                    <Route path="/endQR" exact static component = {EndJourneyQR}/>

                  
                   <Route path="/busfareMain" exact static component = {busfaremain} />



                    <Route path="/RouteHandler" exact static component = {RouteHandler} />


                    <Route path="/BusStopHandler" exact static component = {BusStopHandler} />
                    <Route path="/TMmain" exact static component = {TransportManagerMain} />
                </Switch>
                </div>
       
      </div>
      </Router>
    </div>
    );
  }
}

export default App;
