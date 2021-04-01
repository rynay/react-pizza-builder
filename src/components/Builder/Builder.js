import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
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

  const paths = ['/sauce', '/cheese', '/topping'];

  return (
    <section className={s.container}>
      <Switch>
        <Route path="/sauce">
          <div className={s.navbar}>
            <h2>Sauce</h2>
            <Link className={s.next} to="/cheese">
              <span>Cheese</span> &#8594;
            </Link>
          </div>
          <IngChoice
            ingredients={ingredients}
            type="sauce"
            toggleIng={toggleIng}
          />
        </Route>
        <Route path="/cheese">
          <div className={s.navbar}>
            <Link className={s.back} to="/sauce">
              &#8592; <span>Sauce</span>
            </Link>
            <h2>Cheese</h2>
            <Link className={s.next} to="/topping">
              <span>Toppings</span> &#8594;
            </Link>
          </div>
          <IngChoice
            ingredients={ingredients}
            type="cheese"
            toggleIng={toggleIng}
          />
        </Route>
        <Route path="/topping">
          <div className={s.navbar}>
            <Link className={s.back} to="/cheese">
              &#8592; <span>Cheese</span>
            </Link>
            <h2>Toppings</h2>
            <Link className={s.next} to="/">
              <span>Checkout</span> $
            </Link>
          </div>
          <IngChoice
            ingredients={ingredients}
            type="topping"
            toggleIng={toggleIng}
          />
        </Route>
        <Route path="*">
          <div className={s.navbar}>
            <h2>Sauce</h2>
            <Link className={s.next} to="/cheese">
              <span>Cheese</span> &#8594;
            </Link>
          </div>
          <IngChoice
            ingredients={ingredients}
            type="sauce"
            toggleIng={toggleIng}
          />
        </Route>
      </Switch>
    </section>
  );
};

export default Builder;
