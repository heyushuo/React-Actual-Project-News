import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer';
import PCContainer from './pc_newscontainer'
export default class PCIndex extends React.Component{
	render(){
		return (
			<div>
				<PCHeader></PCHeader>
				<PCContainer></PCContainer>
				<PCFooter></PCFooter>
			</div>
		)
	}
}
