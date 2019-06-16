import React, { Component } from 'react';

// This component will be responsible for storing the unsubmitted
// data and then add it to the parent state on submitting the form
class AddTodo extends Component {
	state = {
		data: null,
		id: null
	};

	handleChange = e => {
		let date = new Date();
		let components = [
			date.getYear(),
			date.getMonth(),
			date.getDate(),
			date.getHours(),
			date.getMinutes(),
			date.getSeconds(),
			date.getMilliseconds()
		];
		let creation = components.join('');

		this.setState({
			// data: JSON.stringify(e.target.value),
			data: e.target.value,
			id: creation
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		// call function from props
		// add a check to see if input data isn't empty
		let extention = Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.substr(0, 5);

		this.setState({
			id: this.state.id + extention
		});

		// if (
		// 	this.state.data !== null &&
		// 	this.state.data !== '' &&
		// 	this.state.id === null &&
		// 	this.state.id === undefined &&
		// 	this.state.id === ''
		// ) {
		// 	this.props.addTodo(this.state);
		// }
		this.props.addTodo(this.state);
	};
	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='todo'>Todo:</label>
					<input
						type='text'
						id='todo'
						onChange={this.handleChange}
						required
					/>
					<button>Add</button>
				</form>
			</React.Fragment>
		);
	}
}

export default AddTodo;
