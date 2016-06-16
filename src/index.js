require('styles/App.css');
require('sources/world.js');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';

import Home from './routes/Home.js';
import Sign from './routes/Sign.js';
import Grafico from './routes/Grafico.js';

const app = document.getElementById('app');

// Render the main component into the dom
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Home}/>
		<Route path="sign" component={Sign}/>
		<Route path="graf" component={Grafico}/>
	</Router>
,app);