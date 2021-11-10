import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
// import QRCode from 'qrcode';
import '../../styles/result/result.css';

class Result extends React.Component {
	state = {
		src: ""
	}

	// componentDidMount() {
	// 	let content = this.getContent();
	// 	QRCode.toDataURL(content).then((data) => {
	// 		this.setState({src: data});
	// 	});
	// }

	render() {
		return <div className="result-content">
			<form>
				<div className="space-top"></div>
				<div className="text red big">ĐĂNG KÝ THÀNH CÔNG!</div>
				<br/>
				<div className="text black">Cảm ơn quý khách!</div>
				<input
					type="submit"
					className="btn"
					value="QUAY LẠI / BACK"
					onClick={(e) => this.handleChangePageClick(e, "MAIN")}
				/>
			</form>
		</div>;
	}

	getContent = () => {
		const content = "Họ và tên: " + this.props.name + "\n"
			+ "Địa chỉ: " + this.props.address + "\n"
			+ "Điện thoại: " + this.props.phone + "\n"
			+ "Số CMND: " + this.props.cmnd + "\n"
			+ "Nơi đến 1: " + (this.props.destination1 !== "" ? this.props.destination1 : "Chưa có thông tin") + "\n"
			+ "Nơi đến 2: " + (this.props.destination2 !== "" ? this.props.destination2 : "Chưa có thông tin") + "\n"
			+ "Ngày xét nghiệm: " + (this.props.testDate !== "" ? this.props.testDate : "Chưa có thông tin") + "\n"
			+ "Ngày tiêm vaccine: " + (this.props.vaccineDate !== "" ? this.props.vaccineDate : "Chưa có thông tin") + "\n"
			+ "Ngày khai báo: " + this.getDate() + " Thời gian: " + this.getTime() + "\n";
		return content;
	}

	getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();

		today = dd + '/' + mm + '/' + yyyy;
		return today;
	}

	getTime = () => {
		var today = new Date();
		var hh = today.getHours();
		var mm = today.getMinutes();
		const time = hh + ":" + mm;
		return time;
	}

	handleChangePageClick = (e, pageName) => {
		e.preventDefault();
		this.props.handleChangePageClick(pageName);
	}
}

export default Result;





