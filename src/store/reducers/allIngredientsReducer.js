import { TOGGLE_ADDED } from '../actions/allIngredientsActions';
import { REMOVE_ALL_INGREDIENTS } from '../actions/ingredientsActions';
import ingredients from '../ingredients.js';

export const allIngredientsReducer = (state = ingredients, action) => {
  switch (action.type) {
    case REMOVE_ALL_INGREDIENTS:
      return [
        { ...state[0] },
        ...state.slice(1).map((ing) => ({
          ...ing,
          added: false,
        })),
      ];
    case TOGGLE_ADDED:
      const targetIndex = state.findIndex((ing) => ing.id === action.payload);
      const target = { ...state[targetIndex] };
      target.added = !target.added;
      if (
        target.added &&
        (target.type === 'sauce' || target.type === 'cheese')
      ) {
        return [
          ...state
            .slice(0, targetIndex)
            .map((ing) =>
              ing.type === target.type ? { ...ing, added: false } : ing
            ),
          { ...target },
          ...state
            .slice(targetIndex + 1)
            .map((ing) =>
              ing.type === target.type ? { ...ing, added: false } : ing
            ),
        ];
      } else {
        return [
          ...state.slice(0, targetIndex),
          { ...target },
          ...state.slice(targetIndex + 1),
        ];
      }
    default:
      return state;
  }
};
