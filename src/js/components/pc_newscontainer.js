import React from 'react';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCImageBlock from './pc_images_block'
export default class PCNewsContainer extends React.Component {
	render() {

		const settings = {
			dots:true,
			infinite:true,
			speed: 500,
			slidesToShow:1,
			autoplay:true
		};

		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg"/></div>
									<div><img src="./src/images/carousel_2.jpg"/></div>
									<div><img src="./src/images/carousel_3.jpg"/></div>
									<div><img src="./src/images/carousel_4.jpg"/></div>
								</Carousel>
							</div>
							<PCImageBlock cartTitle={"国际新闻"}imageWidth="112px" count={6} type="guoji" width="400px" ></PCImageBlock>
							<PCImageBlock cartTitle={"娱乐新闻"}imageWidth="112px" count={6} type="yule" width="400px" ></PCImageBlock>
						</div>
						<Tabs className="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock count={10} type="top" width="100%" bordered="false" />
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={10} type="guoji" width="100%" bordered="false" />
							</TabPane>
						</Tabs>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
