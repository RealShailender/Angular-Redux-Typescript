import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../../actions/counter.action';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()" class="btn btn-success">Increment</button>
    <button (click)="decrement()" class="btn btn-warning">Decrement</button>
    <button (click)="reset()" class="btn btn-primary">Reset</button>

    <h3>{{counter | async}}</h3>
  `,
  styles: []
})
export class CounterComponent{
  counter;
  constructor(
    private _counter: Counter,
    private _store: Store<any>
  ) { 
    this.counter = _store.select('counterReducer');
  }

  increment(){
    this._counter.increment();
  }

  decrement(){
    this._counter.decrement();
  }

  reset(){
    this._counter.reset();
  }

}
