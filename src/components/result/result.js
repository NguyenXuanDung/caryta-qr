import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import QRCode from 'qrcode';
import '../../styles/result/result.css';

class Result extends React.Component {
	state = {
		src: ""
	}

	componentDidMount() {
		QRCode.toDataURL("Name:" + this.props.name + "|address:" + this.props.address).then((data) => {
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
				<input
					type="submit"
					className="btn"
					value="Khai báo lại"
					onClick={(e) => this.handleChangePageClick(e, "MAIN")}
				/>
			</form>
		</div>;
	}

	handleChangePageClick = (e, pageName) => {
		e.preventDefault();
		this.props.handleChangePageClick(pageName);
	}
}

export default Result;





