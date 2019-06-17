import React, { Component } from 'react';
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
			data: e.target.value,
			id: creation
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		let extention = Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.substr(0, 5);

		this.setState({
			id: this.state.id + extention
		});
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
