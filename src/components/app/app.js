import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import  './app.css'

export default class App extends Component { // extends Component - наследцется от компонента
    state = {
        data : [
            {label: "Going to learn React", important: true, like: false, id: 1},
            {label: "That is so good", important: false, like: false, id: 2},
            {label: "I need a break...", important: false, like: false, id: 3}
        ]
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                data: newArr // возвращаем новое значение свойства data в state а не мутируем старое. (иммутабельность)
            }
        })
    }
    addItem = (body) => {
        const newId = this.state.data.length+1
        const newItem = {
            label: body,
            important: false,
            id: newId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newObj = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newObj = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        // метод filter перебирает каждый элемент массива и если у элемента свойство like = true возвращает новый массив
        const allPosts = data.length;

        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                posts={this.state.data}
                onDelete = {this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleLiked = {this.onToggleLiked} />
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}