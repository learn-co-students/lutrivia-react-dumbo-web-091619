import React from 'react'

export default class TrueFalseButtons extends React.Component {

	button_functions = (event) => {
		this.props.get_answer(event, this.props.question_answer);
		this.props.answered(event.target.value, this.props.question_answer.toString());
	}

	render() {
		return(
			<div className="question_card">
				<button value="true"
				 	onClick={this.button_functions}>
					True
				</button>
				<button value="false"
					onClick={this.button_functions}>
					False
				</button>
			</div>
		)
	}

}
