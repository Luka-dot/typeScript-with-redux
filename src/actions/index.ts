import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
};
// FetchTodosAction is optional. This interface helps with making sure that correct type and properties are passed in to dispatch
// this is more crucial in large applications.
export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[]
};

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);  // letting TS know inside response there will be array of {} that satisfy Todo interface

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    };
};