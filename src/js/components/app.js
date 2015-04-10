/**
 * Created by pheadra on 4/10/15.
 */
/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-stores');

var StoreWatchMixin = require('../mixin/StoreWatchMixin');

function getTodoState() {
    return {
        allTodos: AppStore.getAll()
    };
}

var TodoList = React.createClass({
    render: function () {
        var allTodos = this.props.todo;
        var todos = [];
        for (var key in allTodos) {
            todos.push(<li key={key} todo={allTodos[key]} >{allTodos[key].text}</li>);
        }

        return (
            <ul>
                {todos}
            </ul>
        )
    }
});

var APP = React.createClass({
    mixins:[StoreWatchMixin(getTodoState)],
    handleClick: function() {
        AppActions.create(this.refs.todo.getDOMNode().value)
    },
    render: function () {
        return (
            <div>
                <input type="text" placeholder="input todo" ref="todo" />
                <button onClick={this.handleClick}>My APP</button>
                <TodoList todo={this.state.allTodos}/>
            </div>
        )
    }
});

module.exports = APP;