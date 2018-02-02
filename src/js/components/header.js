import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router'
export default class Header extends React.Component{
	constructor(){
		super();
		this.state={
			flage:false
		}
		this.changeStyle=this.changeStyle.bind(this);
	}

	changeStyle(){
		this.setState({
			flage:!this.state.flage
		})
	}
	render(){
		//需要放到render函数里边
		//行内样式
		const style={
			header: {
				color: "red",
				backgroundColor: "yellow",
				paddingTop: (this.state.flage)? "3px" : "50px" ,
				paddingBottom: "20px"
			}
		}
		return (
			<div>
				<ul>
					<li>
						<Link to={'/'}>首页</Link>
					</li>
					<li>
						<Link to={'/list/1234'}>列表</Link>
					</li>
					<li>
						<Link to={'/detail'}>详情</Link>
					</li>
				</ul>
				<header className={ this.state.flage ? "smallFont" : ""} style={style.header} onClick={this.changeStyle} >
					<h1>我是头部 我的老大是何玉硕 我是头部 我是头部</h1>
				</header>
			</div>
		)
	}
}