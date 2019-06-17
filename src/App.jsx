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
				<div className='container'>
					<h1>Todos</h1>
					<div className='app'>
						<AddTodo addTodo={this.addTodo} className='addtodo' />
						<Todos
							className='todos'
							todos={this.state.todos}
							key={this.state.id}
							deleteTodo={this.deleteTodo}
						/>
					</div>
				</div>
			);
		} else {
			return (
				<div className='container'>
					<h1>Todos</h1>
					<div className='app'>
						<AddTodo addTodo={this.addTodo} />
						<div className='no-todos'>
							<p>You've got Nothing to do...</p>
							<h5>Add todos.</h5>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default App;
