import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				data:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, vero!'
			},
			{
				id: 2,
				data:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, vero!'
			}
		]
	};

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
					<hr />
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
					<hr />
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
