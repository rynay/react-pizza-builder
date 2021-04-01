import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../actions/ingredientsActions';
import ingredients from '../ingredients.js';

const initialState = [{ ...ingredients[0] }];

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      console.log(action);
      if (state.find((ing) => ing.id === action.payload.id))
        return [
          ...state.filter((ing) => ing.id !== action.payload.id),
          { ...action.payload },
        ];
      if (action.payload.type === 'sauce' || action.payload.type === 'cheese') {
        return [
          ...state.filter((ing) => ing.type !== action.payload.type),
          { ...action.payload },
        ];
      } else {
        return [...state, { ...action.payload }];
      }
    case REMOVE_INGREDIENT:
      console.log(action);
      return state.filter((ing) => ing.id !== action.payload);
    default:
      return state;
  }
};
