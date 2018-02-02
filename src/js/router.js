import React from 'react'
import ReactDom from 'react-dom'
import Index from './index'

import {Router,Route,hashHistory} from 'react-router'
import ComponentList from './components/list'
import ComponentDetail from "./components/detail";


export default class Root extends React.Component{
	render(){
		return (
			//这里替换之前的index。变成程序的入口
			<Router history={hashHistory} >
				<Route component={Index} path="/" >
					<Route component={ComponentDetail} path="detail" ></Route>
				</Route>
				<Route component={ComponentList} path="list/:id"></Route>
			</Router>
		)
	}
}

ReactDom.render(
	<Root />,
	document.getElementById("example")
)