import { createStore, combineReducers } from 'redux';
import { ingredientsReducer } from './reducers/ingredientsReducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});

export const store = createStore(rootReducer);
