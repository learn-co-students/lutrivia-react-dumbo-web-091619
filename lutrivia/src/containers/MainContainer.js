import React, { Component } from 'react'
import QuestionBox from "../components/QuestionBox.js"
import Data from "../data.js"

export class MainContainer extends Component {
    state = {
        points: 0,
        correct: null
    }

    handleClick = (question, answer) => {
        console.log(question.answer, answer)
        if (question.answer === answer){
            this.setState({
                points: (this.state.points + 1),
                correct: true
            })
        }
    }

    render() {
        return (
            <div>
                {Data.questions.map(question => console.log(question))}
                <p>Points {this.state.points}</p>
                {Data.questions.map((question, index) => <QuestionBox handleClick={this.handleClick} answer={this.state.answer} gotQuestion={this.state.gotQuestion} question={question} key={index} /> )}
            </div>
        )
    }
}

export default MainContainer
