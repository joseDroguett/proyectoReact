import React from 'react'

import Comment from './Comment.js'

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
				{all_comments}
			</div>
		);
	}
}