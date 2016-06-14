import React from 'react'

export default class Comment extends React.Component{
	constructor() {
	  super();
	}

	render(){
		return(
			<div class="comment">
				<div class="alert alert-success">
					<h2>{this.props.autor}</h2>
					<p>{this.props.texto}</p>
				</div>
			</div>
		);
	}
}