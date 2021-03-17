import React, { Component } from 'react';

import './search-panel.css'
export default class SearchPanel extends Component {
    state = {
        term: ''
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        /* то же самое что и {
            term: term
        } */
        this.props.onUpdateSearch(term); // отправляем trem на верх
    }   
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}