import React, { Component } from 'react';
import './App.css'
import TodoFormEdit from './components/TodoFormEdit';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            edit: false,
            editItem: {},
            todoItems: []
        }
    }

    deleteItem = (itemDelete) => {
        const { todoItems } = this.state
        const listTodo = todoItems.filter(item => {
            return (item.id !== itemDelete.id)
        })
        this.setState({
            todoItems: listTodo
        })
    }

    doneItem = (itemDone) => {
        const { todoItems } = this.state
        const isComplete = itemDone.isComplete
        const find = todoItems.indexOf(itemDone)
        this.setState({
            todoItems: [
                ...todoItems.slice(0, find),
                { ...itemDone, isComplete: !isComplete },
                ...todoItems.slice(find + 1),
            ]
        })
    }

    onInputChange = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }

    addTodo = () => {
        const { newItem, edit, todoItems } = this.state
        if (newItem.trim === '') return;
        if (!edit) {
            this.setState({
                newItem: '',
                todoItems: [
                    ...todoItems, { id: uuidv4(), content: newItem, isComplete: false, isEdit: false }
                ]
            })
        }
        else {
            const newTodoItems = todoItems.map(item => {
                if (this.state.editItem.id === item.id) {
                    item.content = newItem
                }
                return item
            })
            this.setState({
                newItem: '',
                todoItems: newTodoItems,
                edit: false,
            })
        }
    }

    editItem = (itemEdit) => {
        this.setState({
            editItem: itemEdit,
            newItem: itemEdit.content,
            edit: true,
        })
    }

    render() {
        const { newItem, todoItems, edit } = this.state
        console.log(todoItems);
        return (
            <div className="App">
                <div className="app-container">
                    <h1 className="title">What's the plan for today?</h1>
                    <TodoFormEdit name={edit ? "Update" : "Add"}
                        value={newItem}
                        change={this.onInputChange}
                        add={this.addTodo}
                    />
                    {todoItems && todoItems.length > 0 &&
                        todoItems.map((item, index) => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    edit={edit}
                                    deleteItem={this.deleteItem}
                                    doneItem={this.doneItem}
                                    editItem={this.editItem}
                                />
                            )
                        })
                    }
                    {todoItems.length === 0 &&
                        <p className="nothing">Nothing todo</p>
                    }

                </div>
            </div>
        );
    }
}

export default App;