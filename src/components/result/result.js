import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import '../../styles/result/result.css';

class Result extends React.Component {

	render() {
		return <div>
			RESULT
			<form>
				<input
					type="submit"
					className="btn"
					value="Khai báo"
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





