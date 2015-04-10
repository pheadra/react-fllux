/**
 * Created by pheadra on 4/11/15.
 */
var React = require('react');
var AppStore = require('../stores/app-stores');

var StoreWatchMixin = function(cb) {
    return {
        getInitialState: function(){
            return cb();
        },
        componentDidMount: function() {
            AppStore.addChangeListener(this._onChange);
        },
        componentWillUnmount: function() {
            AppStore.removeChangeListener(this._onChange);
        },
        _onChange: function() {
            this.setState(cb());
        }
    }
}

module.exports = StoreWatchMixin;