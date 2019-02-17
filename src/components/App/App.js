import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddItem from '../AddItem';
import TodoFilter from '../TodoFilter';
import './app.css';

export default class App extends Component {

    maxId = 100;
    state = {
        dataList: [
            this.createItem('Learn React'),
            this.createItem('Drink coffee'),
            this.createItem('create awesome react-app!')
        ],
        term: '', //search task
        filterActive: 'all' //all, active, done
    };

    createItem(task) {
        return {
            task,
            important: false,
            done: false,
            display: true,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(
            ({dataList}) => {
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
    onSearchChage = (term) => {
        this.setState({term});
    }
    search = (dataList, term) => {
        if(term.length === 0) {
            return dataList
        }
        return dataList.filter((arr) => {
            return arr.task
                .toLowerCase()
                .indexOf(term.toLowerCase()) !== -1;
        });
    };

    toggleProperty(arr, id, property) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [property]: !oldItem[property]}
        return [...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)];
    };

    setFilterActive = (filterActive) => {
        this.setState({ filterActive });
    }

    filterTask = (filterData, filterActive) => {
        console.log(filterActive);
        console.log(filterData);
        switch(filterActive) {
            case 'all':
                return filterData;
            case 'active':
                return filterData.filter(({done}) => !done);
            case 'done':
                return filterData.filter(({done}) => done);
            default:
                return filterData;
        }
    }



    render() {
        const dateMonth = new Date().toLocaleString("en-us", {month: "long"});
        const {dataList, term, filterActive} = this.state;
        const visibleData = this.filterTask(this.search(dataList, term), filterActive);
        const doneCount = dataList.filter((el) => el.done).length;
        const toDo = dataList.length - doneCount;

        return (
            <div className="app container">
                <span>{dateMonth} {new Date().getDate()}, {new Date().getFullYear()}</span>
                <AppHeader toDo={toDo} done={doneCount}/>
                <div className = "main-panel container input-group">
                    <SearchPanel
                        onSearchChage={this.onSearchChage}
                        showAllTasks={this.showAllTasks}
                        showActiveTasks={this.showActiveTasks}
                        showDoneTasks={this.showDoneTasks}
                    />
                    <TodoFilter
                        filterActive={filterActive}
                        setFilterActive = {this.setFilterActive}
                    />
                </div>
                <TodoList
                    todos={visibleData}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <AddItem addItem={this.addItem}/>
            </div>
        )
    }
};