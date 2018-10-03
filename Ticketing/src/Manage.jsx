import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
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
                <Route path="/busfareMain" exact static component = {busfaremain} />        
                <Route path="/RouteHandler" exact static component = {RouteHandler} />
                <Route path="/BusStopHandler" exact static component = {BusStopHandler} />
                 <Route path="/" exact static component = {TransportManagerMain} />
                </Switch>
                </div>
       
      </div>
      </Router>
    </div>
    );
  }
}

export default App;
