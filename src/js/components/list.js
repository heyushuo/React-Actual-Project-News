import React from 'react'
export default class ComponentList extends React.Component{
	render(){
		return(
			<div>
				<h1>这个列表页面的Id是：{this.props.params.id} </h1>
				<ul>
					<li>这里是列表噢耶面</li>
					<li>列表页面</li>
					<li>哈哈哈列表页面</li>
				</ul>
			</div>
		)
	}
}