import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
	return (
		<div className='todos-list'>
			{todos.map(todo => {
				return (
					<div className='todo' key={todo.id}>
						<div>{todo.data}</div>
						{/* <textarea name='' id='' cols='30' rows='10'>
							{todo.data}
						</textarea> */}
						{/* <div>{todo.id}</div> */}
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
