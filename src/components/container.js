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
		phone: "",
		cmnd: "",
		email: "",
		workingTime: "",
		deposit: "",
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
			case "PHONE": this.setState({ phone: value }); break;
			case "CMND": this.setState({ cmnd: value }); break;
			case "EMAIL": this.setState({ email: value }); break;
			case "WORKING_TIME": this.setState({ workingTime: value }); break;
			case "DEPOSIT": this.setState({ deposit: value }); break;
			default: break;
		}
	}

	getBody = () => {
		switch (this.state.selectedPage) {
			case "MAIN": return <Form
					handleChangePageClick = {this.handleChangePageClick}
					name = {this.state.name}
					cmnd={this.state.cmnd}
					phone={this.state.phone}
					email={this.state.email}
					workingTime={this.state.workingTime}
					deposit={this.state.deposit}
					updateValue = {this.updateValue}
				/>;
			default: return <Result
				handleChangePageClick = {this.handleChangePageClick}
				name = {this.state.name}
				phone={this.state.phone}
				cmnd={this.state.cmnd}
				email={this.state.email}
				destination2={this.state.destination2}
				testDate={this.state.testDate}
				vaccineDate={this.state.vaccineDate}
			/>;
		}
	}
}

export default Container;
