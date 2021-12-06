import React, { Component } from 'react';

class TodoFormEdit extends Component {
    render() {
        const { change, value, name, add } = this.props
        return (
            <div className="add-todo">
                <input onChange={(e) => change(e)} value={value} type="text" name="" id="input-todo" placeholder="Enter todo..." />
                <button onClick={() => add()} className="btn-add">{name}</button>
            </div>
        );
    }
}

export default TodoFormEdit;