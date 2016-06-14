/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

//server
const express = require('express');
const http = require('http');
const engine = require('socket.io');

const port = 3000;
const app = express();

let data = [
	{id: 1, autor: "Persona 1", texto: 'Comentario de mierda'},
	{id: 2, autor: "Persona 2", texto: 'El de arriba habla puras pescá!'}
];

let server = http.createServer(app).listen(port, ()=>{
	console.log(`Server listen in port ${port}`);
});

const io = engine.listen(server);

io.on('connection', (socket) => {
	io.emit('Connection success')

	socket.on('read',()=>{
		io.emit('data',data)
	})
	socket.on('sign',(sign)=>{
		data.unshift(sign);
		io.emit('data',data);
	})
});

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});
