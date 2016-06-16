import React from 'react'

import Comment from './Comment.js'

const CSSTransitionGroup = require('react-addons-css-transition-group')

export default class CommentList extends React.Component{
	constructor() {
	  super();
	}

	render(){
		let all_comments = this.props.data.map((comment)=>{
			return(<Comment key={comment.id} autor={comment.autor} texto={comment.texto}/>)
		})

		return(
			<div class="commentList">
				<CSSTransitionGroup transitionName="comment" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{all_comments}
				</CSSTransitionGroup>
			</div>
		);
	}
}