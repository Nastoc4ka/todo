import React from 'react';

import './appHeader.css';

	
	const AppHeader = ({toDo, done}) => {
		return (
			<div className = "appHeader container row">
				<div className = "col-7">
					<h1>My Todo List</h1>
				</div>
				<div className = "col-5">
					{toDo} more to do, {done} done
				</div>
			</div>
		)
	};

export default AppHeader;