/**
 * Created by pheadra on 4/11/15.
 */
/**
 * Created by pheadra on 4/10/15.
 */
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";


var _todos = {};

function _create(text) {
    var id = Date.now();
    _todos[id] = {
        id: id,
        text: text
    };
}

var AppStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _todos;
    },
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
        console.log('store', payload);
        var action = payload.action; // this is our action from handleViewAction
        switch(action.actionType){
            case AppConstants.TODO_CREATE:
                text = action.text.trim();
                if (text !== '') {
                    _create(text);
                    AppStore.emitChange();
                }
                break;
        }

        return true;
    })
});

module.exports = AppStore;