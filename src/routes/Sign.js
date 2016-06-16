import $ from 'jquery'
import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import CommentBox from '../components/CommentBox.js'

import CommentActions from '../actions/CommentActions.js'
import CommentStore from '../stores/CommentStore.js'
import BotonSalir from '../components/BotonSalir.js'

@ReactMixin.decorate(Reflux.connect(CommentStore,'comments'))
export default class Sign extends React.Component{
	constructor() {
	  super();
	}

	componentDidMount(){
		CommentActions.fetchComments()
	}

	onSubmitSendComment(ev){
		ev.preventDefault()
		let data = $(ev.target).serializeArray()
		let comment = {
			id: data[2].value,
			autor: data[0].value,
			texto: data[1].value
		}
		CommentActions.sendSign(comment)
	}

	render(){
		if(!this.state.comments){
			return(<h1>Loading...</h1>)
		}else{
			return(
				<div class='sign'>
					<CommentBox onSubmit={this.onSubmitSendComment.bind(this)} data={this.state.comments}/>
					<BotonSalir suclase='form-control' to='/' />
				</div>
			)
		}
	}
}