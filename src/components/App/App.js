import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddItem from '../AddItem';
import './app.css';

export default class App extends Component {

	maxId = 100;
	state = {
		dataList : [
			this.createItem('Learn React'),
			this.createItem('Drink coffee'),
			this.createItem('create awesome react-app!')
			]
	};

	createItem (task) {
		return {
			task,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	deleteItem = (id) => {
		this.setState(
			({ dataList }) => {
				const idx = dataList.findIndex((el) => el.id === id);
				//console.log(idx);
				//[a, b, c, d, e]
				//[a, b,  , d, e]
				const newDataList = [...dataList.slice(0, idx), 
									 ...dataList.slice(idx + 1)]
				return {
					dataList: newDataList
				}
			}
		);
	};

	addItem = (text) => {
		//console.log(text);
		const newItem = this.createItem(text);
		this.setState(
			({dataList}) => {
				const newDataList = [...dataList, newItem];
				return {
					dataList: newDataList
				};
			}
		);
	};

	toggleProperty (arr, id, property) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = {...oldItem, [property]: !oldItem[property]}
		return [...arr.slice(0, idx),
				newItem,  
				...arr.slice(idx + 1)];
	};

	onToggleImportant = (id) => {
		this.setState(({dataList}) => {
			return {
			dataList: this.toggleProperty(dataList, id, 'important')
			}
		})
	};

	onToggleDone = (id) => {
		this.setState(({dataList}) => {
			return {
			dataList: this.toggleProperty(dataList, id, 'done')
			}
		})
	};

	render () {
		const dateMonth = new Date().toLocaleString("en-us", { month: "long" });
		const { dataList } = this.state;
		const doneCount = dataList.filter((el) => el.done).length;
		const toDo = dataList.length - doneCount;

		return (
			<div  className = "app container">
				<span>{dateMonth} {new Date().getDate()}, {new Date().getFullYear()}</span>
				<AppHeader toDo = {toDo} done = {doneCount} />
				<SearchPanel />
				<TodoList 
					todos = {dataList}
					onDelete = {this.deleteItem}
					onToggleImportant = {this.onToggleImportant} 
					onToggleDone = {this.onToggleDone}/>
				<AddItem addItem = {this.addItem}/>
			</div>
		)
	}
};