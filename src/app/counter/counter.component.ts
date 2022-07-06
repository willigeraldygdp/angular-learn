import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import * as fromCounter from './counter.reducer'

@Component({
  selector: 'app-my-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(fromCounter.increment());
  }

  decrement() {
    this.store.dispatch(fromCounter.decrement());
  }

  reset() {
    this.store.dispatch(fromCounter.reset());
  }
}
