import React from 'react'
import ReactEcharts from 'echarts-for-react';

export default class GraficosBarra extends React.Component{
	constructor() {
	  super();
	}

	getOption(){
		const option = {
    	title : {
        text: 'Las barras',
        subtext: 'test barras 1.0'
    	},
    	tooltip : {
        trigger: 'axis'
    	},
    	legend: {
        data:['Serie 1','Serie 2']
    	},
    	toolbox: {
        show : true,
        feature : {
          dataView : {
          	show: true,
          	title : 'Ver datos',
        		readOnly: false,
        		lang: ['Lista de datos', 'Cancelar', 'Guardar']
          },
          magicType : {
          	show: true,
          	title : {
          		line: 'Linea',
          		bar: 'Barras'
          	},
          	type: ['line', 'bar']
          },
          restore : {
          	show: true,
          	title: 'Recargar'
          },
          saveAsImage : {
          	show: true,
          	title : 'Guardar',
        		type : 'png',
          	lang : ['Guardar']
          }
        }
    	},
    	calculable : true,
    	xAxis : [
        {
          type : 'category',
          data : ['A','B','C','D','E','F','G','H','I','J','K','L']
        }
    	],
    	yAxis : [
        {
          type : 'value'
        }
    	],
    	series : [
        {
          name:'Serie 1',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint : {
            data : [
              {type : 'max', name: 'Maximo'},
              {type : 'min', name: 'Minimo'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name: 'Promedio'}
            ]
          }
        },
        {
        	name:'Serie 2',
          type:'bar',
          data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint : {
            data : [
              {name : 'Marca 1', value : 182.2, xAxis: 7, yAxis: 183},
              {name : 'Marca 2', value : 2.3, xAxis: 11, yAxis: 3}
            ]
         	},
          markLine : {
            data : [
              {type : 'average', name : 'Promedio'}
            ]
          }
        }
    	]
		};
		return option;
	}

  componentDidUpdate() {
    let chart = this.refs.barras_echarts_react.getEchartsInstance()
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
          ref='barras_echarts_react'
			    option={this.getOption()}
			    style={{height: '500px'}}
          onChartReady={this.onChartReady}
          showLoading={true}
			  />
			</div>
		);
	}
}