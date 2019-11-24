import React from 'react'
import TrueFalseButtons from './TrueFalseButtons.js'

export default class QuestionCard extends React.Component {

	state = {
		question_answered: false,
		correct: null
	}

	toggle_answered = (user_answer, question_answer) => {
		let result = question_answer === user_answer
		this.setState({
			question_answered: true,
			correct: result
		})
	}

	render(){

		console.log(this.state.correct)

		return(
			<div className="question_card">
				<span>{this.props.question.text}</span>
				<br />
			{	!(this.state.question_answered) ? (
					<TrueFalseButtons
						question_answer={this.props.question.answer}
						get_answer={this.props.get_answer}
						answered={this.toggle_answered}
						// correct_answer={this.correct_answer}
					/>
				) : (
					""
				)
			}
			</div>
		)
	}

}