import React from 'react'

import BotonSalir from './BotonSalir.js'
import GraficoCircular from './GraficoCircular.js'
import GraficoArea from './GraficoArea.js'
import GraficoBarra from './GraficoBarras.js'
import GraficoMapa from './GraficoMapa.js'

const CSSTransitionGroup = require('react-addons-css-transition-group')

export default class GraficoBox extends React.Component{
	constructor() {
	  super();

	  this.state = {
			grafico: ''
		}
	}

	graficoCircular() {
    this.state = {
			grafico: <GraficoCircular />
		}
		this.forceUpdate()
  }

  graficoArea() {
    this.state = {
			grafico: <GraficoArea />
		}
		this.forceUpdate()
  }

  graficoBarra() {
    this.state = {
			grafico: <GraficoBarra />
		}
		this.forceUpdate()
  }

  graficoMapa() {
    this.state = {
			grafico: <GraficoMapa />
		}
		this.forceUpdate()
  }


	render(){
		return(
			<div class="grafico_box">
				<h1 class='text-center'>Mis gráfico con ECharts y React</h1>
				<button class='btn btn-default' onClick={this.graficoCircular.bind(this)}>
          Grafico Circular
        </button>
        <button class='btn btn-default' onClick={this.graficoArea.bind(this)}>
          Grafico Area
        </button>
        <button class='btn btn-default' onClick={this.graficoBarra.bind(this)}>
          Grafico Barra
        </button>
        <button class='btn btn-default' onClick={this.graficoMapa.bind(this)}>
          Grafico Mapa
        </button>
        <BotonSalir to='/'/>
        <CSSTransitionGroup transitionName="entrada_grafico" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{this.state.grafico}
				</CSSTransitionGroup>
			</div>
		);
	}
}