import React from 'react';
import './todoFilter.css';

const TodoFilter = () => {
	return (
		<div className="todoFilter btn-group input-group-append">
			<button className="btn btn-info">All</button>
			<button className="btn btn-outline-secondary">Active</button>
			<button className="btn btn-outline-secondary">Done</button>
		</div>
	)
};

export default TodoFilter;