import React, { Component } from 'react';
import TodoFilter from '../TodoFilter';

export default class SearchPanel extends Component {

	render () {
		
		return (
			<div className = "searchPanel container input-group">
				<input className = "form-control" placeholder = "search" />
				<TodoFilter />
			</div>
		)
	}
}