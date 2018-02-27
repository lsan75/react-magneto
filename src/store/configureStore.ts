import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { defaulStore } from './root';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
  return createStore(
    rootReducer,
    defaulStore,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware
    ))
  );
}