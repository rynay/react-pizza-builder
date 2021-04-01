import { createStore, combineReducers } from 'redux';
import { ingredientsReducer } from './reducers/ingredientsReducer';
import { allIngredientsReducer } from './reducers/allIngredientsReducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  allIngredients: allIngredientsReducer,
});

export const store = createStore(rootReducer);
