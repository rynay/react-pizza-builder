import { TOGGLE_ADDED } from '../actions/allIngredientsActions';
import ingredients from '../ingredients.js';

export const allIngredientsReducer = (state = ingredients, action) => {
  switch (action.type) {
    case TOGGLE_ADDED:
      const targetIndex = state.findIndex((ing) => ing.id === action.payload);
      const target = { ...state[targetIndex] };
      target.added = !target.added;
      return [
        ...state.slice(0, targetIndex),
        { ...target },
        ...state.slice(targetIndex + 1),
      ];
    default:
      return state;
  }
};
