import React from 'react'
import { Link } from 'react-router'

const logo_datactil = require('../images/logo_datactil.png')

export default class Home extends React.Component{
	constructor() {
	  super();
	}

	render(){
		return(
			<div class="home">
				<img class='center-block' src={logo_datactil} alt="Logo Datactil"/>
				<h1 id="titulo_home" class='text-center'>Mi codigo React, Pasa y firma! :)</h1>
				<div class='text-center'>
					<Link class='btn btn-default btn-lg' to="sign">Firma ahora! :D</Link>
				</div>
			</div>
		)
	}
}