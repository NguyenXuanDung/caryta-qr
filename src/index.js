import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Container from './components/container';
import {Helmet} from "react-helmet";

class Dung extends React.Component {

		render() {
				return (
					<div>
						<Helmet>
							<title>Caryta</title>
						</Helmet>
						{/*<Container></Container>*/}
						Đã chuyển sang dùng PC covid, không dùng app này nữa
					</div>);
		}
}

ReactDOM.render(
		<Dung/>,
		document.getElementById('root')
);
