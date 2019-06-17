import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
	return (
		<div className='todos-list'>
			{todos.map(todo => {
				return (
					<div className='todo' key={todo.id}>
						<div>{todo.data}</div>
						<button
							onClick={() => {
								deleteTodo(todo.id);
							}}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
