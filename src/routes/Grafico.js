import React from 'react'

import GraficoBox from '../components/GraficoBox.js'

export default class Grafico extends React.Component{
	constructor() {
	  super();
	}

	render(){
		return(
			<div class="grafico">
				<GraficoBox />
			</div>
		)
	}
}