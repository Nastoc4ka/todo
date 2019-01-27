import React from 'react';

import TodoListItem from '../TodoListItem';
import './todoList.css';

	
	const TodoList = ({todos, onDelete, onToggleImportant, onToggleDone}) => {

		const element = todos.map((todo) => {
			const {id, ...todoItem} = todo;
			return (
				<li className = "list-group-item" key={id}>
					<TodoListItem { ...todoItem } 
						onDelete = {() => onDelete(id)}
						onToggleDone = {() => onToggleDone(id)}
						onToggleImportant = {() => onToggleImportant(id)}/>
				</li>
			);
		});
		
		return (
			<ul className = "list-group todoList">{element}</ul>
		);
	};

export default TodoList;