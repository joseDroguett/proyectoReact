import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default class GraficosCircular extends React.Component{
	constructor() {
	  super();
	}

	getOption(){
		const option = {
	    tooltip: {
	      trigger: 'item',
	      formatter: '{a} <br/>{b}: {c} ({d}%)'
	    },
	    legend: {
	      orient: 'vertical',
	      x: 'left',
	      data:['a','b','c','d','d']
	    },
	    loadingOption:{
	    	text: 'Cargando'
	    },
	    series: [{
	      name:'Prueba',
	      type:'pie',
	      radius: ['50%', '70%'],
	      avoidLabelOverlap: false,
	      label: {
	        normal: {
	          show: false,
	          position: 'center'
	        },
	        emphasis: {
	          show: true,
	          textStyle: {
	            fontSize: '30',
	            fontWeight: 'bold'
	          }
	        }
	      },
	      labelLine: {
	        normal: {
	        	show: false
	        }
	      },
	      data:[
	        {value:335, name:'a'},
	        {value:310, name:'b'},
	        {value:234, name:'c'},
	        {value:135, name:'d'},
	        {value:1548, name:'d'}
	      ]
	    }]
		};
		return option;
	}

	componentDidUpdate() {
    let chart = this.refs.circular_echarts_react.getEchartsInstance()
    setTimeout(function() {
      chart.hideLoading();
    }, 1000)
  }

  onChartReady(chart) {
    setTimeout(function() {
      chart.hideLoading();
    }, 1000)
  }

	render(){
		return(
			<div class="mi_grafico">
				<ReactEcharts
					ref='circular_echarts_react'
			    option={this.getOption()}
			    style={{height: '500px'}}
			    onChartReady={this.onChartReady}
          showLoading={true}
			  />
			</div>
		);
	}
}