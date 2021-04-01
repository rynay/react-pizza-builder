import { useSelector } from 'react-redux';
import s from './Ingredients.module.css';
import Ingredient from '../../Ingredient';

const Ingredients = () => {
  const ingredients = useSelector((store) => store.ingredients);
  return (
    <section className={s.container}>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing.id}>
            <Ingredient ing={ing} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
