import React from 'react'

export default class CommentForm extends React.Component{
	constructor() {
	  super();
	}

	render(){
		return(
			<form onSubmit={this.props.onSubmit} class="commentForm">
				<input type="text" class="form-control" name="autor" placeholder="Su nombre"/>
				<input type="text" class="form-control" name="texto" placeholder="Firma! :D"/>
				<input type="hidden" name="id" value={Date.now()} />
				<input type="submit" class="boton_comentar form-control btn btn-primary" value="Enviar! :D"/>
			</form>
		);
	}
}