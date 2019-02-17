import React, {Component} from 'react';

export default class SearchPanel extends Component {
    state = {
        searchTask: ''
    };
    onChangeSearch = (e) => {
        const searchTask = e.target.value
        this.setState({ searchTask });
        this.props.onSearchChage(searchTask);
    };

    render() {
        return (
                <input
                    className="form-control"
                    placeholder="search"
                    value = {this.state.searchTask}
                    onChange={this.onChangeSearch}
                />
        )
    }
}