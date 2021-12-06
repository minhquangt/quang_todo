import classNames from 'classnames';
import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editItem: this.props.item
        }
    }


    edit = (item) => {
        this.props.editItem(item)
    }

    render() {
        const { deleteItem, item, doneItem, edit } = this.props
        return (
            <div>
                <div className={classNames('todo-item',
                    {
                        'done': item.isComplete,
                        'edit': edit
                    },
                )}>
                    <button onClick={() => doneItem(item)} className="done-btn">
                        <i className="far fa-check-circle"></i>
                    </button>
                    <p className="todo-text">{item.content}</p>
                    <div className="todo-btn">
                        <button onClick={() => deleteItem(item)}><i className="far fa-times-circle"></i></button>
                        <button onClick={(item) => this.edit(this.state.editItem)}><i className="fas fa-edit"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;