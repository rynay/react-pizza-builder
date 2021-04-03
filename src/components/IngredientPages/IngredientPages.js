import IngredientPage from './IngredientPage';
import { Route, Switch } from 'react-router-dom';
import styles from './IngredientPages.module.css';

const IngredientPages = ({
  types,
  currentIngredients,
  allIngredients,
  toggleIng,
  toggleWarning,
}) => {
  return (
    <Switch>
      {types.map((type, i) => (
        <Route key={i} path={`/${type}`}>
          <IngredientPage
            toggleWarning={toggleWarning}
            s={styles}
            type={type}
            types={types}
            i={i}
            currentIngredients={currentIngredients}
            allIngredients={allIngredients}
            toggleIng={toggleIng}
          />
        </Route>
      ))}
    </Switch>
  );
};

export default IngredientPages;
