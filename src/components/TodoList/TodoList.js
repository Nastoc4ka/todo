import React from 'react';

import TodoListItem from '../TodoListItem';
import './todoList.css';

	
	const TodoList = ({todos, onDelete, onToggleImportant, onToggleDone, hideTask}) => {
		//console.log(todos);
		const element = todos.map((todo) => {
			const {id, display, ...todoItem} = todo;

			let classnames = "list-group-item";
			if(!display) {
                classnames += ' displayHidden'
            };

			return (
				<li className = {classnames}  key={id}>
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