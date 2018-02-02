import React from 'react';
// var footerCss=require("../../css/footer.css")

// import "../../css/footer.css"
import footer from "../../css/footer.css"
import { Input , Select, Icon,DatePicker  } from 'antd';

export default class ComponentFooter extends React.Component{
	constructor(){
		super();
		this.onChange=this.onChange.bind(this);
	}
	onChange(date, dateString) {
		console.log(date, dateString);
	}
	render(){
		return (
			<footer className={footer.footer +" "+ footer.aaa} >
				<h3>我是底部部分</h3>
				<Input placeholder="Basic usage" />
				<Input placeholder="Basic usage" />
				<br/>
				<DatePicker onChange={this.onChange} />
			</footer>
		)
	}
}