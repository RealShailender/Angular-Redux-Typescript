import { Store, Action } from '@ngrx/store';
import { ActionTypes } from '../shared/constant';

export const counterReducer = (state: number=0, action: Action) =>{
    switch(action.type){
        case ActionTypes.INCREMENT:
        return state + 1;

        case ActionTypes.DECREMENT:
        return state - 1;

        case ActionTypes.RESET:
        return 0;

        default:
        return state;
    }
}