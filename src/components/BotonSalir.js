import React from 'react'
import { Link } from 'react-router'

export default class BotonSalir extends React.Component{
	constructor() {
	  super();
	}

	getClass(){
		let clase = 'boton_salir'
		if(this.props.suclase)
			clase += ' '+this.props.suclase;
		let fijo = 'btn btn-danger';
		return clase+' '+fijo
	}

	render(){
		return(
			<div class="text-center">
				<Link class={this.getClass()} to={this.props.to}>Volver</Link>
			</div>
		);
	}
}