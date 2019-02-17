import React, { Component } from 'react';
import './addItem.css';

export default class AddItem extends Component {

    state = {
        nTask: ''
    }

    newTaskRead = (e) => {
        this.setState ({
           nTask: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.nTask === '') {return console.log('no item')}
        this.props.addItem(this.state.nTask);
        this.setState ({
            nTask:''
        })
    }

    render () {
		
		return (
			<form className = "AddItem container input-group" onSubmit = {this.onSubmit}>
				<input className = "form-control"
                       id = 'newItem'
                       placeholder = "input new item"
                       onChange = {this.newTaskRead}
                       value = {this.state.nTask}
                />
				<div className="btn-group input-group-append">
					<button className="btn btn-outline-secondary btn-group input-group-append">Add Item</button>
				</div>
			</form>
		)
	}
}