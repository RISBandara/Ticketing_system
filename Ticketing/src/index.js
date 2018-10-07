import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import Login from "./views/login & account creation/login";

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
