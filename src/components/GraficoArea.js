import React from 'react'
import ReactEcharts from 'echarts-for-react';

export default class GraficosArea extends React.Component{
	constructor() {
	  super();
	}

	getOption(){
		const option = {
    	title: {
      	text: 'Mi grafico de Area'
    	},
	    tooltip : {
	    	trigger: 'axis'
	    },
	    legend: {
	    	data:['Area 1']
	    },
	    toolbox: {
        feature: {
          saveAsImage: {
          	show: true,
          	title : 'Guardar',
        		type : 'png',
          	lang : ['Guardar']
          }
        }
	    },
	    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
	    },
	    xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['a','b','c','d','e','f','g']
        }
	    ],
	    yAxis : [
	      {
	        type : 'value'
	      }
	    ],
    	series : [
        {
          name:'Area 1',
          type:'line',
          stack: 'a',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        }
    	]
		};
		return option;
	}

	componentDidUpdate() {
    let chart = this.refs.area_echarts_react.getEchartsInstance()
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
					ref='area_echarts_react'
			    option={this.getOption()}
			    style={{height: '500px'}}
					onChartReady={this.onChartReady}
          showLoading={true}
			  />
			</div>
		);
	}
}