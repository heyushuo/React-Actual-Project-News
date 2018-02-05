import React from 'react'
import {
	Row,
	Col ,
	Menu,
	Icon,
	Modal,
	Button
		} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class PCHeader extends React.Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);
		this.showModal=this.showModal.bind(this);
		this.handleOk=this.handleOk.bind(this);
		this.handleCancel=this.handleCancel.bind(this);

		this.state={
			current:"top",
			visible:false

		}

	}
	//弹出框开始
	const showModal=() => {
		this.setState({
			visible: true,
		});
	}
	const handleOk=(e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	const handleCancel=(e) => {
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
	}

	render(){
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
						</Menu>
						{/*弹出框的部分代码*/}
						<Modal
							title="Basic Modal"
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}
						>
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
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
