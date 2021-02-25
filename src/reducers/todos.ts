import { Todo, FetchTodosAction } from '../actions/index';
import { ActionTypes } from '../actions/types';

// state: Todo[] specify type of state. Default value has to be provided as well = []  this case epty [].
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default:
            return state;
    }
};