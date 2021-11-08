import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import QRCode from 'qrcode';
import '../../styles/result/result.css';

class Result extends React.Component {
	state = {
		src: ""
	}

	componentDidMount() {
		let content = this.getContent();
		QRCode.toDataURL(content).then((data) => {
			this.setState({src: data});
		});
	}

	render() {
		return <div className="result-content">
			<form>
				<img
					className="qr-code"
					src={this.state.src}
				/>
				<div className="text black">Mã QR code dùng để Check in</div>
				<div className="text black">Ngày khai báo: {this.getDate()} Thời gian: {this.getTime()} </div>
				<br/>
				<div className="text red">VUI LÒNG LƯU LẠI QRCODE ĐỂ SỬ DỤNG</div>
				<br/>
				<div className="text black justify">
					Nếu có thay đổi lịch trình di chuyển hoặc trạng thái sức khoẻ liên quan đến phòng chống dịch theo quy định: Người dân có trách nhiệm phải KHAI BÁO BỔ SUNG.
				</div>
				<br/>
				<div className="text black justify">
					Nếu có triệu chứng nghi nhiễm; tiếp xúc với người nghi nhiễm, về từ vùng dịch: Đề nghị Anh/Chị liên hệ/đến cơ quan y tế gần nhất để được hướng dẫn, hỗ trợ.
				</div>
				<br/>
				<div className="text black">Liên hệ đường dây nóng:</div>
				<br/>
				<div className="text black left">1. TP Đà Nẵng: <span className="red">(0236) 1022</span> </div>
				<div className="text black left">2. Trung tâm CDC Đà Nẵng: <span className="red">0905 108 844</span> </div>
				<div className="text black left">3. Đường dây nóng Bộ Y tế: <span className="red">1900 9095</span> </div>
				<br/>
				<div className="text black">Cảm ơn bạn đã khai báo thông tin y tế!</div>
				<input
					type="submit"
					className="btn"
					value="Khai báo lại"
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





