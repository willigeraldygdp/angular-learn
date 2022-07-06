import { Action, createAction} from '@ngrx/store';
import {createReducer, on} from '@ngrx/store';

import * as fromCounter from './counter.reducer'

export const featureName = 'Counter'

export const initialState = 0;

export const increment = createAction(`[${featureName}] Increment`);
export const decrement = createAction(`[${featureName}] Decrement`);
export const reset = createAction(`[${featureName}] Reset`);

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
