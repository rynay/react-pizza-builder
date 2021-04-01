import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ingredients from '../../store/ingredients';
import {
  addIngredientAC,
  removeIngredientAC,
} from '../../store/actions/ingredientsActions';
import { toggleAddedAC } from '../../store/actions/allIngredientsActions';
import s from './Builder.module.css';

import IngChoice from '../IngChoice';

const Builder = () => {
  const ingredients = useSelector((store) => store.allIngredients);
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

  return (
    <section>
      <Switch>
        <Route path="/sauce">
          <IngChoice
            ingredients={ingredients}
            type="sauce"
            toggleIng={toggleIng}
          />
        </Route>
        <Route path="/cheese">
          <IngChoice
            ingredients={ingredients}
            type="cheese"
            toggleIng={toggleIng}
          />
        </Route>
        <Route path="/topping">
          <IngChoice
            ingredients={ingredients}
            type="topping"
            toggleIng={toggleIng}
          />
        </Route>
      </Switch>
    </section>
  );
};

export default Builder;
