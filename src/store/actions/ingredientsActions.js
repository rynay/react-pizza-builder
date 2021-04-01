export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const addIngredientAC = (ing) => ({
  type: ADD_INGREDIENT,
  payload: ing,
});

export const removeIngredientAC = (id) => ({
  type: REMOVE_INGREDIENT,
  payload: id,
});
