import React from 'react';

export default class mainChild extends React.Component{

	render(){
		return (
			<div>
				<p>main的子页面输入：<input type="text" onChange={this.props.handleChange} /></p>
				{this.props.id} {this.props.userId}  {this.props.username}
			</div>

		)
	}
}

