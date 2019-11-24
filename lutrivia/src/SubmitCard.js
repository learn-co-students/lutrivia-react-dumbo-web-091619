import React from 'react'

export default class SubmitCard extends React.Component {

	render(){

		return(
			<div className="submit_card">
				<form>
					<input type="text" name="name" placeholder="Enter Your Name" />
					<input type="submit" />
				</form>
			</div>
		)
	}
}