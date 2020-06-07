import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import uiReducer from 'state/ui';
import restaurantReducer from 'state/restaurant';

const rootReducer = combineReducers({
  ui: uiReducer,
  restaurant: restaurantReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
