import { ActionReducer, Action } from '@ngrx/store';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export function questionReducer(state = [], action: Action) {
    switch(action.type) {
       case ADD:
        return [
            ...state,
            action.payload
        ];
       case REMOVE: 
        return state;
       default:
        return state;
    }
}