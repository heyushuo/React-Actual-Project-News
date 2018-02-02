import React from 'react';
import ReactDom from 'react-dom';
import MainChild from './mainChild'
import MixinLog from './mixins'
import ReactMixin from 'react-mixin'
//独立组件减共享   Mixins
const defaultProps={
	username:"我是一个默认的用户名"
}

export default class ComponentMain extends React.Component{
	constructor(){
		super() //调用基类的所有的初始方法
		this.state = {
			username:"xiaoliang",
			age:20
		}
		this.changeUserInfo = this.changeUserInfo.bind(this,99);
		this.handleChange   =this.handleChange.bind(this);
	}


	componentWillMount(){
		//组件将要加载时
		console.log("组件将要加载时");
	}

	componentDidMount(){
		console.log("组件加载完调用");
	}
	//传参数的形式
	/*changeUserInfo(age){
		this.setState({
			age:age
		})
	}*/
	changeUserInfo(){
		this.setState({
			age:50
		})
		MixinLog.log();
		MixinLog.alert()
	//第一种方式通过id来获取
		var btn=document.getElementById("btn");
		ReactDom.findDOMNode(btn).style.background='red';
		//第二种方式
		this.refs.btn.style.color="yellow"
	}
	handleChange(e){
		this.setState({age:e.target.value})
	}
	render(){
		let username="heyushuo";
		const flag=false;
		const html='hello&nbsp;heyushuo';
		return (
			<div>
				{/*讲这个页面父元素提供的值，传到此组件的子元素里*/}
				<MainChild {...this.props} id={4} handleChange={this.handleChange} />

				<div>
					<input id="btn" ref='btn' type="button" value="提交" onClick={this.changeUserInfo}/>
					<p>age :  {this.state.age}</p>

					<br/>
					接收到父元素的值：{this.props.userId} {this.props.username}
				</div>
				<h2>我是主题部分</h2>
				<p>{ username==''?'用户还没有登陆':'用户名'+ username }</p>
				<p><input type="button" value={username} disabled={flag} /></p>
				{/*这里是注释内容*/}
				<p>{html}</p>  {/*需要使用  Unicode  的转码*/}
				<p dangerouslySetInnerHTML={{__html : html}}></p>
				<h2>主题部分结束</h2>
				<h1>生命周期开始</h1>
				<div>
					render()函数结束后，<br/>
					第一次调用结束后<br/>
					1.组件将要加载的函数 componentWillMount();<br/>
					2.组件加载完成后     componentDidMount();<br/>
					之后在调用render()<br/>
					1.组件跟新前         componentWillUpdata();
					<br/>
					2.组件跟新完成后     componentDidUpdata();
					<br/>
					组件删除的时候会调用 componentWillUnmount();
					<br/>
					<img src="./src/img/React生命周期函数.png" alt=""/>
					<br/>
					<img src="./src/img/React生命周期.png" alt=""/>
				</div>
			</div>
		)
	}
}
ComponentMain.propTypes={
	userid:React.PropTypes.number
}
ComponentMain.defaultProps=defaultProps;

//独立组件减共享   Mixins
//独立组件减共享   Mixins

ReactMixin(ComponentMain.prototype,MixinLog)