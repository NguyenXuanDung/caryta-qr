import React from 'react';
import logo from '../../images/logo.png';
import '../../styles/form/form.css';

class Form extends React.Component {

	state = {
		isNameFocused: false,
		isPhoneFocused: false,
		isCmndFocused: false,
		isEmailFocused: false,
		isWorkingTimeFocused: false,
		isDepositFocused: false,
	}

	componentDidMount() {
		if (this.props.name != "") {
			this.setState({isNameFocused : true});
		}
		if (this.props.phone != "") {
			this.setState({isPhoneFocused : true});
		}
		if (this.props.cmnd != "") {
			this.setState({isCmndFocused : true});
		}
		if (this.props.email != "") {
			this.setState({isEmailFocused : true});
		}
		if (this.props.workingTime != "") {
			this.setState({isWorkingTimeFocused : true});
		}
		if (this.props.deposit != "") {
			this.setState({isDepositFocused : true});
		}
	}

	render() {
		return <div className="login-content">
			<form>
				<img src={logo} alt="logo"/>
				<div
					className={["input-div", "name", this.state.isNameFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-user"></i>
					</div>
					<div className="div">
						<h5>HỌ VÀ TÊN / NAME <span className="required">*</span> </h5>
						<input
							type="text"
							className="input"
							value={this.props.name}
							onChange={(e) => this.handleChangeValue(e, "NAME")}
							onFocus={() => this.handleFocus("NAME")}
							onBlur={() => this.handleBlur("NAME")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "phone", this.state.isPhoneFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-phone"></i>
					</div>
					<div className="div">
						<h5>SỐ ĐIỆN THOẠI / PHONE <span className="required">*</span> </h5>
						<input
							type="tel"
							className="input"
							value={this.props.phone}
							onChange={(e) => this.handleChangeValue(e, "PHONE")}
							onFocus={() => this.handleFocus("PHONE")}
							onBlur={() => this.handleBlur("PHONE")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "cmnd", this.state.isCmndFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-id-card"></i>
					</div>
					<div className="div">
						<h5>SỐ CMND / ID CARD <span className="required">*</span></h5>
						<input
							type="text"
							className="input"
							value={this.props.cmnd}
							onChange={(e) => this.handleChangeValue(e, "CMND")}
							onFocus={() => this.handleFocus("CMND")}
							onBlur={() => this.handleBlur("CMND")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "email", this.state.isEmailFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-envelope"></i>
					</div>
					<div className="div">
						<h5>THƯ ĐIỆN TỬ / EMAIL <span className="required">*</span></h5>
						<input
							type="text"
							className="input"
							value={this.props.email}
							onChange={(e) => this.handleChangeValue(e, "EMAIL")}
							onFocus={() => this.handleFocus("EMAIL")}
							onBlur={() => this.handleBlur("EMAIL")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "working-time", this.state.isWorkingTimeFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-calendar"></i>
					</div>
					<div className="div">
						<h5>THỜI GIAN LÀM VIỆC / TIME <span className="required">*</span></h5>
						<input
							type="text"
							className="input"
							value={this.props.workingTime}
							onChange={(e) => this.handleChangeValue(e, "WORKING_TIME")}
							onFocus={() => this.handleFocus("WORKING_TIME")}
							onBlur={() => this.handleBlur("WORKING_TIME")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "deposit", this.state.isDepositFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-money-check-alt"></i>
					</div>
					<div className="div">
						<h5>ĐẶT CỌC / DEPOSIT <span className="required">*</span></h5>
						<input
							type="text"
							className="input"
							value={this.props.deposit}
							onChange={(e) => this.handleChangeValue(e, "DEPOSIT")}
							onFocus={() => this.handleFocus("DEPOSIT")}
							onBlur={() => this.handleBlur("DEPOSIT")}
						/>
					</div>
				</div>
				<br/>
				<div className="text black left">Stk: <span className="red">19029998668017 Techcombank</span> </div>
				<div className="text black left">Bùi Thị Xuân Linh ( caryta bridal) </div>
				<br/>
				<div className="text black left">Stk: <span className="red">1008726666327 Vietinbank</span> </div>
				<div className="text black left">Trần Văn Trung ( caryta studio) </div>
				<br/>
				<input
					type="submit"
					className="btn"
					value="ĐỒNG Ý / AGREE"
					onClick={(e) => this.handleChangePageClick(e, "RESULT")}
					disabled={!this.isValidForm()}
				/>
			</form>
		</div>;
	}

	handleChangeValue = (event, field) => {
		this.props.updateValue(event.target.value, field);
	}

	handleFocus = (field) => {
		switch (field) {
			case "NAME": this.setState({isNameFocused : true}); break;
			case "PHONE": this.setState({isPhoneFocused : true}); break;
			case "CMND": this.setState({isCmndFocused : true}); break;
			case "EMAIL": this.setState({isEmailFocused : true}); break;
			case "WORKING_TIME": this.setState({isWorkingTimeFocused : true}); break;
			case "DEPOSIT": this.setState({isDepositFocused : true}); break;
			default: break;
		}

	}

	handleBlur = (field) => {
		switch (field) {
			case "NAME":
				if (this.props.name == "") {
					this.setState({isNameFocused : false});
				}
				break;
			case "PHONE":
				if (this.props.phone == "") {
					this.setState({isPhoneFocused : false});
				}
				break;
			case "CMND":
				if (this.props.cmnd == "") {
					this.setState({isCmndFocused : false});
				}
				break;
			case "EMAIL":
				if (this.props.email == "") {
					this.setState({isEmailFocused : false});
				}
				break;
			case "WORKING_TIME":
				if (this.props.workingTime == "") {
					this.setState({isWorkingTimeFocused : false});
				}
				break;
			case "DEPOSIT":
				if (this.props.deposit == "") {
					this.setState({isDepositFocused : false});
				}
				break;
			default: break;
		}

	}

	handleChangePageClick = (e, pageName) => {
		e.preventDefault();
		this.props.handleChangePageClick(pageName);
	}

	isValidForm = () => {
		return this.props.name != ""
			&& this.props.phone != ""
			&& this.props.email != ""
			&& this.props.workingTime != ""
			&& this.props.deposit != ""
			&& this.props.cmnd != "";
	}
}

export default Form;





