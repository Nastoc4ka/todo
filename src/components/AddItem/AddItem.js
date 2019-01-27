import React, { Component } from 'react';
import './addItem.css';

export default class AddItem extends Component {

	render () {
		
		return (
			<div className = "AddItem container input-group">
				<input className = "form-control" id = 'newItem' placeholder = "input new item" />
				<div className="btn-group input-group-append">
					<button className="btn btn-outline-secondary btn-group input-group-append" onClick={() => this.props.addItem('hello world')}>Add Item</button>
				</div>
			</div>
		)
	}
}