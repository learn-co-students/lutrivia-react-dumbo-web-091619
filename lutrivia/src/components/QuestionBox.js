import React, { Component } from 'react'

export class QuestionBox extends Component {
    render() {
        return (
            <div>
            <p>{this.props.question.text}</p>
        <button onClick={() => this.props.handleClick(this.props.question, true)}>true</button> <button onClick={() => this.props.handleClick(this.props.question, false)}>false</button>
            </div>
        )
    }
}

export default QuestionBox
