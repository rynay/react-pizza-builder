import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../actions/ingredientsActions';
import ingredients from '../ingredients.js';

export const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return [...state, ...ingredients[action.payload]];
    case REMOVE_INGREDIENT:
      return state.filter((ing) => ing.id !== action.payload);
    default:
      return state;
  }
};
