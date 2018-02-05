import React from 'react'
import {
	Row,
	Col ,
	Menu,
	Icon,
	Modal,
	Button,
	Form,
	Input,
	message,
	Tabs
		} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
//弹出form表单
/*const CollectionCreateForm = Form.create()(
	(props) => {
		const { visible, handleOk, handleCancel, form } = props;
		const { getFieldDecorator ,getFieldProps } = form;
		return(

		)
	}
)*/
class PCHeader extends React.Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);
		this.showModal=this.showModal.bind(this);
		this.handleOk=this.handleOk.bind(this);
		this.handleCancel=this.handleCancel.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.state={
			current:"top",
			visible:false,
			action:'login',
			hasLogined:false,
			userNickName:'',
			userid:0

		}

	}
	componentWillMount(){
		if (localStorage.getItem('userid')) {
			this.setState({hasLogined:true});
			this.setState({userNickName:localStorage.getItem('userNickName'),userid:localStorage.getItem('userid')});
		}
	}
	//弹出框开始
	showModal=() => {
		this.setState({
			visible: true,
		});
	}
	handleOk=(e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	handleCancel=(e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}

	//弹出框的结束
	handleClick(e) {
		this.setState({
			current: e.key,
		});
		if(e.key=="register"){
			this.setState({
				visible: true,
			});
		}
	}
	//提交表单
	handleSubmit(e){
		e.preventDefault();
		var formData=this.props.form.getFieldsValue();
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
		then(res=>res.json()).then(json=>{
			console.log(json)
			this.setState({userNickName:"heyushuo",userid:"1"});

		}).catch(err => {alert("error")});

		message.success("请求成功！");
		this.setState({
			visible: false,
			hasLogined: true
		});
	}

	//
	callback(){

	}


	render(){
		const { getFieldDecorator} = this.props.form;
	//	const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
				<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
				&nbsp;&nbsp;
				<a target="_blank">
					<Button type="dashed" htmlType="button">个人中心</Button>
				</a>
				&nbsp;&nbsp;
				<Button type="ghost" htmlType="button" onClick={this.logout}>退出</Button>
			</Menu.Item>
			: <Menu.Item key="register" class="register">
				<Icon type="appstore"/>注册/登录
			</Menu.Item>;

		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="logo">
							<img src="./src/images/logo.png" alt=""/>
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="horizontal"
						>
							<Menu.Item key="top">
								<Icon type="appstore"/>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore"/>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"/>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"/>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"/>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore"/>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"/>科技
							</Menu.Item>
							<Menu.Item key="shishang">
								<Icon type="appstore"/>时尚
							</Menu.Item>
							{userShow}
						</Menu>
						{/*弹出框的部分代码*/}
						<Modal
							title="注册"
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}
						>

							<Form layout="horizontal">
								<Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
									<TabPane tab="注册" key="1">
										<FormItem label="账户">
											{getFieldDecorator('r_userName', {
												rules: [{ required: true, message: '请填写账号！' }],
											})(
												<Input  />
											)}
										</FormItem>
										<FormItem label="密码">
											{getFieldDecorator('r_password', {
												rules: [{ required: true, message: '请输入密码！' }],
											})(
												<Input type="password" />
											)}
										</FormItem>
										<FormItem label="确认密码">
											{getFieldDecorator('r_confirmPassword', {
												rules: [{ required: true, message: '请输入确认密码！' }],
											})(
												<Input type="password" />
											)}
										</FormItem>
										<Button type="primary" onClick={this.handleSubmit} htmlType="submit">注册</Button>
									</TabPane>
									<TabPane tab="登录" key="2">
										<FormItem label="账户">
											{getFieldDecorator('r_userName', {
												rules: [{ required: true, message: '请填写账号！' }],
											})(
												<Input  />
											)}
										</FormItem>
										<FormItem label="密码">
											{getFieldDecorator('r_password', {
												rules: [{ required: true, message: '请输入密码！' }],
											})(
												<Input type="password" />
											)}
										</FormItem>
										<FormItem label="确认密码">
											{getFieldDecorator('r_confirmPassword', {
												rules: [{ required: true, message: '请输入确认密码！' }],
											})(
												<Input type="password" />
											)}
										</FormItem>
										<Button type="primary" onClick={this.handleSubmit} htmlType="submit">登录</Button>
									</TabPane>
								</Tabs>

							</Form>
						</Modal>
						{/*弹出框的部分代码结束*/}
					</Col>
					<Col span={2}></Col>
					<Col span={2}></Col>
				</Row>
			</header>
		)
	}
}
export default PCHeader = Form.create({})(PCHeader);