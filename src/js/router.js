import React from 'react'
import ReactDom from 'react-dom'

export default class Root extends React.Component{
	render(){
		return (
			<div>
				<h1>我是项目的入口文件</h1>
			</div>
		)
	}
}

ReactDom.render(
	<Root />,
	document.getElementById("mainContainer")
)