import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Card
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router'
class CommonComments extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: ''
		};
	}
		componentWillMount() {
			var myFetchOptions = {
				method: 'GET'
			};
			fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
				this.setState({comments: json});
			});
		};
		handleSubmit(e) {
			e.preventDefault();
			var myFetchOptions = {
				method: 'GET'
			};
			var formdata = this.props.form.getFieldsValue();
			fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
				this.componentDidMount();
			})
		};
		render() {
			let {getFieldDecorator} = this.props.form;
			const { comments } = this.state;
			const commnetList = comments.length?
				comments.map((comment,index)=>(
					<Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
						<p>{comment.Commnets}</p>
					</Card>
				))
				:
				'没有加载到任何评论';
			return (
				<div className="comment">
					<Row>
						<Col span={24}>
							{commnetList}
							<Form onSubmit ={this.handleSubmit.bind(this)}>
								<FormItem label="账户">
									{getFieldDecorator('remark', {
										rules: [{ required: true, message: '请填写账号！' }],
									})(
										<Input  type="texarea" />
									)}
								</FormItem>
								<Button type="primary" htmlType="submit">提交评论</Button>
							</Form>
						</Col>
					</Row>
				</div>
			);
		};
	}

export default CommonComments = Form.create({})(CommonComments);
