import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';
import './styles.css';

class App extends Component {
	constructor() {
		super();

		if (localStorage.rtodos) {
			this.state = JSON.parse(localStorage.getItem('rtodos'));
		} else {
			this.state = {
				todos: []
			};
			localStorage.setItem('rtodos', JSON.stringify(this.state));
		}
		console.log('Started');
	}

	componentDidUpdate() {
		localStorage.setItem('rtodos', JSON.stringify(this.state));
	}

	addTodo = todo => {
		// this.state.todos.values(this.)
		let tempTodos = [...this.state.todos, todo];
		this.setState({
			todos: tempTodos
		});
	};

	deleteTodo = id => {
		let tempTodos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos: tempTodos
		});
	};

	render() {
		if (this.state.todos.length > 0) {
			return (
				<div>
					<AddTodo addTodo={this.addTodo} />
					<br />
					<Todos
						todos={this.state.todos}
						key={this.state.id}
						deleteTodo={this.deleteTodo}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<AddTodo addTodo={this.addTodo} />
					<br />
					<div className='no-todos'>
						<h5>No todos to show.</h5>
						<p>Please add Todos...</p>
					</div>
				</div>
			);
		}
	}
}

export default App;
