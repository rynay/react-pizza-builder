export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const addIngredientAC = (id) => ({
  type: ADD_INGREDIENT,
  payload: id,
});

export const removeIngredientAC = (id) => ({
  type: REMOVE_INGREDIENT,
  payload: id,
});
