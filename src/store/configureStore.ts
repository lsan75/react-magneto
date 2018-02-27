import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { defaulStore } from './root';

export default function configureStore() {
  return createStore(
    rootReducer,
    defaulStore,
    applyMiddleware(
      thunkMiddleware
    )
  );
}