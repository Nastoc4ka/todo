import React, {Component} from 'react';
import './todoFilter.css';

export default class TodoFilter extends Component {

    buttons = [
        {name: 'all', buttonName: 'All'},
        {name: 'active', buttonName: 'Active'},
        {name: 'done', buttonName: 'Done'}
    ]



    render() {
        const {filterActive, setFilterActive} = this.props;

        const buttonsToShow = this.buttons.map(({name, buttonName}) => {
            const active = filterActive === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return <button className={`btn ${clazz}`} key={name} onClick={() => setFilterActive(name)}>{buttonName}</button>
        })

        return (
            <div className="todoFilter btn-group input-group-append">
                {buttonsToShow}
            </div>
        )

    }
};
