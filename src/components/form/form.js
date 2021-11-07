import React from 'react';
import avatar from '../../images/avatar.svg';
import '../../styles/form/form.css';

class Form extends React.Component {

	state = {
		name: "",
		address: "",
		isNameFocused: false,
		isAddressFocused: false,
	}

	render() {
		return <div className="login-content">
			<form action="index.html">
				<img src={avatar} alt="person"/>
					<h2 className="title">CARYTA</h2>
					<div
						className={["input-div", "name", this.state.isNameFocused ? "focus" : ""].join(" ")}
					>
						<div className="i">
							<i className="fas fa-user"></i>
						</div>
						<div className="div">
							<h5>Họ và tên</h5>
							<input
								type="text"
								className="input"
								value={this.state.name}
								onChange={this.handleChangeName}
								onFocus={this.handleNameFocus}
								onBlur={this.handleNameBlur}
							/>
						</div>
					</div>
					<div
						className={["input-div", "address", this.state.isAddressFocused ? "focus" : ""].join(" ")}
					>
						<div className="i">
							<i className="fas fa-location-arrow"></i>
						</div>
						<div className="div">
							<h5>Địa chỉ</h5>
							<input
								type="text"
								className="input"
								value={this.state.address}
								onChange={this.handleChangeAddress}
								onFocus={this.handleAddressFocus}
								onBlur={this.handleAddressBlur}
							/>
						</div>
					</div>
					<input
						type="submit"
						className="btn"
						value="Khai báo"
						onClick={(e) => this.handleChangePageClick(e, "RESULT")}
					/>
			</form>
		</div>;
	}

	handleChangeName = (event) => {
		this.setState({name: event.target.value});
	}

	handleChangeAddress = (event) => {
		this.setState({address: event.target.value});
	}

	handleNameFocus = () => {
		this.setState({isNameFocused : true});
	}

	handleNameBlur = () => {
		if (this.state.name == "") {
			this.setState({isNameFocused : false});
		}
	}

	handleAddressFocus = () => {
		this.setState({isAddressFocused : true});
	}

	handleAddressBlur = () => {
		if (this.state.address == "") {
			this.setState({isAddressFocused : false});
		}
	}


	handleChangePageClick = (e, pageName) => {
		e.preventDefault();
		console.log("state: ", this.state);
		this.props.handleChangePageClick(pageName);
	}
}

export default Form;





