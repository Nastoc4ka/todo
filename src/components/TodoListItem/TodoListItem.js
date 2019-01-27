import React, { Component } from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component {

	
	render() {
		const {task, onDelete, onToggleImportant, onToggleDone, important, done } = this.props;
		//console.log(this.props.important);
		let classNames = "col-9";

		if (done) {
			classNames +=' done'
		};

		if (important) {
			classNames += ' important'
		};

		return (
			<span className = "todoListItem form-row">
				<span className = {classNames} onClick = {onToggleDone}>{task}</span>
				<button className="btn btn-outline-danger col" onClick = {onDelete}><i className="far fa-trash-alt"></i></button>
				<button className="btn btn-outline-success col" onClick = {onToggleImportant}><i className="fas fa-exclamation"></i></button>
			</span>
		)

	}
}