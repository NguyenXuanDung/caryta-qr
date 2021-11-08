import React from 'react';
import '../styles/container.css';
import Form from './form/form';
import Result from './result/result';
import wave from '../images/wave.png';
import bg from '../images/bg.svg';
import '@fortawesome/fontawesome-free/js/all.js';

class Container extends React.Component {

	state = {
		selectedPage: "MAIN",
		name: "",
		address: "",
		phone: "",
		cmnd: "",
		destination1: "",
		destination2: "",
		testDate: "",
		vaccineDate: "",
	}

	render() {
		return <div>
			<img src={wave} alt="person" className="wave"/>
			<div className="container">
				<div className="img">
					<img src={bg} alt="person" className="img"/>
				</div>
				{this.getBody()}
			</div>
		</div>;
	}

	handleChangePageClick = (navName) => {
		this.setState({
			selectedPage: navName
		});
	}

	updateValue = (value, field) => {
		switch (field) {
			case "NAME": this.setState({ name: value }); break;
			case "ADDRESS": this.setState({ address: value }); break;
			case "PHONE": this.setState({ phone: value }); break;
			case "CMND": this.setState({ cmnd: value }); break;
			case "DESTINATION1": this.setState({ destination1: value }); break;
			case "DESTINATION2": this.setState({ destination2: value }); break;
			case "TEST_DATE": this.setState({ testDate: value }); break;
			case "VACCINE_DATE": this.setState({ vaccineDate: value }); break;
			default: break;
		}
	}

	getBody = () => {
		switch (this.state.selectedPage) {
			case "MAIN": return <Form
					handleChangePageClick = {this.handleChangePageClick}
					name = {this.state.name}
					address={this.state.address}
					cmnd={this.state.cmnd}
					phone={this.state.phone}
					destination1={this.state.destination1}
					destination2={this.state.destination2}
					testDate={this.state.testDate}
					vaccineDate={this.state.vaccineDate}
					updateValue = {this.updateValue}
				/>;
			default: return <Result
				handleChangePageClick = {this.handleChangePageClick}
				name = {this.state.name}
				address={this.state.address}
				phone={this.state.phone}
				cmnd={this.state.cmnd}
				destination1={this.state.destination1}
				destination2={this.state.destination2}
				testDate={this.state.testDate}
				vaccineDate={this.state.vaccineDate}
			/>;
		}
	}
}

export default Container;
