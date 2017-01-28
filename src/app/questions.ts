import { ActionReducer, Action } from '@ngrx/store';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';
export function questionReducer(state = [], action: Action) {
    switch(action.type) {
       case ADD:
        return [
            ...state,
            action.payload
        ];
        case UPDATE:
            return state;
       case REMOVE: 
        return state;
       default:
        return state;
    }
}