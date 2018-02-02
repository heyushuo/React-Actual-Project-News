import React from 'react';
import ReactDom from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentMain from './components/main';
import "antd/dist/antd.css"
export default class HomeIndex extends React.Component{
	render(){
		return (
			<div>
				<div>
					{this.props.children}
				</div>

				<ComponentHeader />
				<ComponentMain userId ={123456} username={"何玉硕"} />
				<ComponentFooter />
			</div>

		)
	}
}

/*ReactDom.render(
	<HomeIndex />,
	document.getElementById("example")
)*/
