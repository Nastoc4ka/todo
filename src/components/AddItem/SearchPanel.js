import React, { Component } from 'react';

export default class AddItem extends Component {

	render () {
		
		return (
			<div className = "AddItem container input-group">
				<input className = "form-control" placeholder = "search" />
				<button className="btn btn-outline-secondary">Add Item</button>
			</div>
		)
	}
}