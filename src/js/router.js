import React from 'react'
import ReactDom from 'react-dom'
import {Router,hashHistory,Route} from 'react-router'
import "antd/dist/antd.css"
import MediaQuery from 'react-responsive';    //做移动动端适配用的
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import PCNewsDetail from './components/pc_news_details'

export default class Root extends React.Component{
	render(){
		return (
			<div>
				<MediaQuery query="(min-device-width: 1224px)">
					<Router history={hashHistory}  >
						<Route path="/" component={PCIndex} ></Route>
						<Route path="/details/:uniquekey" component={PCNewsDetail} ></Route>

					</Router>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1224px)">
					<MobileIndex />
				</MediaQuery>
			</div>
		)
	}
}

ReactDom.render(
	<Root />,
	document.getElementById("mainContainer")
)