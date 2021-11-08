import React from 'react';
import avatar from '../../images/avatar.svg';
import '../../styles/form/form.css';

class Form extends React.Component {

	state = {
		isNameFocused: false,
		isAddressFocused: false,
		isPhoneFocused: false,
		isDestination1Focused: false,
		isDestination2Focused: false,
		isCmndFocused: false,
		isTestDateFocused: false,
		isVaccineDateFocused: false,
	}

	componentDidMount() {
		if (this.props.name != "") {
			this.setState({isNameFocused : true});
		}
		if (this.props.address != "") {
			this.setState({isAddressFocused : true});
		}
		if (this.props.phone != "") {
			this.setState({isPhoneFocused : true});
		}
		if (this.props.destination1 != "") {
			this.setState({isDestination1Focused : true});
		}
		if (this.props.destination2 != "") {
			this.setState({isDestination2Focused : true});
		}
		if (this.props.cmnd != "") {
			this.setState({isCmndFocused : true});
		}
		if (this.props.testDate != "") {
			this.setState({isTestDateFocused : true});
		}
		if (this.props.vaccineDate != "") {
			this.setState({isVaccineDateFocused : true});
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
					className={["input-div", "address", this.state.isAddressFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-house-user"></i>
					</div>
					<div className="div">
						<h5>ĐỊA CHỈ / ADDRESS <span className="required">*</span> </h5>
						<input
							type="text"
							className="input"
							value={this.props.address}
							onChange={(e) => this.handleChangeValue(e, "ADDRESS")}
							onFocus={() => this.handleFocus("ADDRESS")}
							onBlur={() => this.handleBlur("ADDRESS")}
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
					className={["input-div", "destination1", this.state.isDestination1Focused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-location-arrow"></i>
					</div>
					<div className="div">
						<h5>NƠI ĐẾN 1 / 1st DESTINATION</h5>
						<input
							type="text"
							className="input"
							value={this.props.destination1}
							onChange={(e) => this.handleChangeValue(e, "DESTINATION1")}
							onFocus={() => this.handleFocus("DESTINATION1")}
							onBlur={() => this.handleBlur("DESTINATION1")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "destination2", this.state.isDestination2Focused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-location-arrow"></i>
					</div>
					<div className="div">
						<h5>NƠI ĐẾN 2 / 2nd DESTINATION</h5>
						<input
							type="text"
							className="input"
							value={this.props.destination2}
							onChange={(e) => this.handleChangeValue(e, "DESTINATION2")}
							onFocus={() => this.handleFocus("DESTINATION2")}
							onBlur={() => this.handleBlur("DESTINATION2")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "test_date", this.state.isTestDateFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-calendar"></i>
					</div>
					<div className="div">
						<h5>NGÀY XÉT NGHIỆM / TEST DATE</h5>
						<input
							type="text"
							className="input"
							value={this.props.testDate}
							onChange={(e) => this.handleChangeValue(e, "TEST_DATE")}
							onFocus={() => this.handleFocus("TEST_DATE")}
							onBlur={() => this.handleBlur("TEST_DATE")}
						/>
					</div>
				</div>
				<div
					className={["input-div", "vaccine_date", this.state.isVaccineDateFocused ? "focus" : ""].join(" ")}
				>
					<div className="i">
						<i className="fas fa-calendar"></i>
					</div>
					<div className="div">
						<h5>NGÀY TIÊM / VACCINATION DATE</h5>
						<input
							type="text"
							className="input"
							value={this.props.vaccineDate}
							onChange={(e) => this.handleChangeValue(e, "VACCINE_DATE")}
							onFocus={() => this.handleFocus("VACCINE_DATE")}
							onBlur={() => this.handleBlur("VACCINE_DATE")}
						/>
					</div>
				</div>
				<div className="text">Khuyến cáo: Khai báo thông tin sai là vi phạm pháp luật Việt Nam và có thể bị xử lý hình sự.</div>

				<input
					type="submit"
					className="btn"
					value="KHAI BÁO / SUBMIT"
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
			case "ADDRESS": this.setState({isAddressFocused : true}); break;
			case "PHONE": this.setState({isPhoneFocused : true}); break;
			case "CMND": this.setState({isCmndFocused : true}); break;
			case "DESTINATION1": this.setState({isDestination1Focused : true}); break;
			case "DESTINATION2": this.setState({isDestination2Focused : true}); break;
			case "TEST_DATE": this.setState({isTestDateFocused : true}); break;
			case "VACCINE_DATE": this.setState({isVaccineDateFocused : true}); break;
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
			case "ADDRESS":
				if (this.props.address == "") {
					this.setState({isAddressFocused : false});
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
			case "DESTINATION1":
				if (this.props.destination1 == "") {
					this.setState({isDestination1Focused : false});
				}
				break;
			case "DESTINATION2":
				if (this.props.destination2 == "") {
					this.setState({isDestination2Focused : false});
				}
				break;
			case "TEST_DATE":
				if (this.props.testDate == "") {
					this.setState({isTestDateFocused : false});
				}
				break;
			case "VACCINE_DATE":
				if (this.props.vaccineDate == "") {
					this.setState({isVaccineDateFocused : false});
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
			&& this.props.address != ""
			&& this.props.phone != ""
			&& this.props.cmnd != "";
	}
}

export default Form;





