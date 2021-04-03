import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  addIngredientAC,
  removeIngredientAC,
} from '../../store/actions/ingredientsActions';
import { toggleAddedAC } from '../../store/actions/allIngredientsActions';
import s from './Builder.module.css';

import IngredientPages from '../IngredientPages';

const Builder = () => {
  const ingredients = useSelector((store) => store.allIngredients);
  const currentIngredients = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  const toggleIng = (ing) => {
    const target = ingredients.find((ingredient) => ingredient.id === ing.id);
    if (target.added) {
      dispatch(toggleAddedAC(target.id));
      dispatch(removeIngredientAC(target.id));
    } else {
      dispatch(toggleAddedAC(target.id));
      dispatch(addIngredientAC({ ...target, added: true }));
    }
  };

  const types = ['sauce', 'cheese', 'topping'];

  return (
    <section className={s.container}>
      <Redirect from="/" to="/sauce" />
      <IngredientPages
        types={types}
        currentIngredients={currentIngredients}
        allIngredients={ingredients}
        toggleIng={toggleIng}
      />
    </section>
  );
};

export default Builder;
