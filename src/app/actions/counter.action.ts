import { Injectable } from '@angular/core';
import { Store, Action, ActionReducer } from '@ngrx/store';
import { ActionTypes } from '../shared/constant';

@Injectable()
export class Counter {
    constructor(
        private _store: Store<string>
    ) { }
    increment() {
        this._store.dispatch({ type: ActionTypes.INCREMENT });
    }

    decrement() {
        this._store.dispatch({ type: ActionTypes.DECREMENT });
    }

    reset() {
        this._store.dispatch({ type: ActionTypes.RESET });
    }
}
