import React from 'react';
import {Row, Col,BackTop } from 'antd';
import PCImageBlock from './pc_images_block'
export default class PCNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		})
	};
	// 必须将要渲染的字段变为下边这种格式才可以渲染   {__html:this.state.newsItem.pagecontent}
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
					</Col>
					<Col span={6}>
						<PCImageBlock cartTitle={"相关新闻"}imageWidth="112px" count={36} type="guoji" width="400px" ></PCImageBlock>
					</Col>
					<Col span={2}></Col>
				</Row>
				<BackTop />
			</div>
		);
	};
}
