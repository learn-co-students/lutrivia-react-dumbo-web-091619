import React from 'react'
import QuestionCard from './QuestionCard.js'

export default class QuestionList extends React.Component {

	render(){
		const distribute_questions = this.props.questions.questions.map((question, index) =>
				<QuestionCard
					key={ index + 1 }
					question={ question }
					get_answer={ this.props.get_answer }
				/>
			)

		return(
			<div className="question_list">
				{ distribute_questions }
			</div>
		)
	}

}