import React from 'react'
import QuestionList from './QuestionList'
import SubmitCard from './SubmitCard.js'

export default class Container extends React.Component {

	state = {
		score: 0
	}

	get_answer = (event, answer) => {

		let score = this.state.score

		const user_answer = event.target.value
		const question_answer = answer.toString()

		const update_score = (user_answer === question_answer) ? (score += 1) : (score)

		this.setState({
			score: update_score
		})
	}

	new_game = () => {
		const new_game_score = 0
		this.setState({
			score: new_game_score
		})
	}

	render(){

		return(
			<div className="container">
				Lutrivia
				<br />
				<button
					onClick={ this.new_game } >
					New Game
				</button>
				Score: { this.state.score }
				<QuestionList
					questions={ this.props.questions }
					get_answer={ this.get_answer }
				/>
				<SubmitCard />
			</div>
		)
	}

}