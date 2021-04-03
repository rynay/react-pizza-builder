import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../actions/ingredientsActions';
import ingredients from '../ingredients.js';

const initialState = [{ ...ingredients[0] }];

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (state.find((ing) => ing.id === action.payload.id)) {
        const result = [
          ...state.filter((ing) => ing.id !== action.payload.id),
          { ...action.payload },
        ];
        return [
          ...result.filter((ing) => ing.type === 'basic'),
          ...result.filter((ing) => ing.type === 'sauce'),
          ...result.filter((ing) => ing.type === 'cheese'),
          ...result.filter((ing) => ing.type === 'topping'),
        ];
      }
      if (action.payload.type === 'sauce' || action.payload.type === 'cheese') {
        const result = [
          ...state.filter((ing) => ing.type !== action.payload.type),
          { ...action.payload },
        ];
        return [
          ...result.filter((ing) => ing.type === 'basic'),
          ...result.filter((ing) => ing.type === 'sauce'),
          ...result.filter((ing) => ing.type === 'cheese'),
          ...result.filter((ing) => ing.type === 'topping'),
        ];
      } else {
        return [...state, { ...action.payload }];
      }
    case REMOVE_INGREDIENT:
      return state.filter((ing) => ing.id !== action.payload);
    default:
      return state;
  }
};
