import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions/index';

// this interface is optional. Defining interface for whole store
// TS is now checking the object that is passed in to combineReducers.
// looks at each property (ie: todos: ) and this case function (todosReducer) returns value of type Todo[].
// basicaly TS is making sure what is returnd is "lining up" with what store is actually going to be as defined.
export interface StoreState {
    todos: Todo[];
};

export const reducers = combineReducers({
    todos: todosReducer
});