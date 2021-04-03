import { useSelector } from 'react-redux';
import s from './Ingredients.module.css';
import Ingredient from '../../Ingredient';

const Ingredients = () => {
  const ingredients = useSelector((store) => store.ingredients);
  return (
    <section className={s.container}>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients
          .filter((ing) => ing.type === 'basic')
          .map((ing) => (
            <li key={ing.id}>
              <Ingredient ing={ing} />
            </li>
          ))}
        {ingredients
          .filter((ing) => ing.type === 'sauce')
          .map((ing) => (
            <li key={ing.id}>
              <Ingredient ing={ing} />
            </li>
          ))}
        {ingredients
          .filter((ing) => ing.type === 'cheese')
          .map((ing) => (
            <li key={ing.id}>
              <Ingredient ing={ing} />
            </li>
          ))}
        {ingredients
          .filter((ing) => ing.type === 'topping')
          .map((ing) => (
            <li key={ing.id}>
              <Ingredient ing={ing} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Ingredients;
