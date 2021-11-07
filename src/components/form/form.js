import React from 'react';
import avatar from '../../images/avatar.svg';
import '../../styles/form/form.css';

class Form extends React.Component {

	state = {
		isNameFocused: false,
		isAddressFocused: false,
	}

	componentDidMount() {
		if (this.props.name != "") {
			this.setState({isNameFocused : true});
		}
		if (this.props.address != "") {
			this.setState({isAddressFocused : true});
		}
	}

	render() {
		return <div className="login-content">
			<form>
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
								value={this.props.name}
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
								value={this.props.address}
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
						disabled={!this.isValidForm()}
					/>
			</form>
		</div>;
	}

	handleChangeName = (event) => {
		this.props.updateName(event.target.value);
	}

	handleChangeAddress = (event) => {
		this.props.updateAddress(event.target.value);
	}

	handleNameFocus = () => {
		this.setState({isNameFocused : true});
	}

	handleNameBlur = () => {
		if (this.props.name == "") {
			this.setState({isNameFocused : false});
		}
	}

	handleAddressFocus = () => {
		this.setState({isAddressFocused : true});
	}

	handleAddressBlur = () => {
		if (this.props.address == "") {
			this.setState({isAddressFocused : false});
		}
	}

	handleChangePageClick = (e, pageName) => {
		e.preventDefault();
		this.props.handleChangePageClick(pageName);
	}

	isValidForm = () => {
		return this.props.name != "" && this.props.address != "";
	}
}

export default Form;





