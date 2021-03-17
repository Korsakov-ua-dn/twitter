import React, {Component} from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.maxId = 4;
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }
    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit} >
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange} //стандартный обработчик onChange в него помещвем функцию котор запишет данные в стейт
                    value={this.state.text} // сделали контролируемым элемент
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
}