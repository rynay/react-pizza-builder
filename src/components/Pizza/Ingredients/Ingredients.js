import s from './Ingredients.module.css';
import Ingredient from '../../Ingredient';

const Ingredients = ({ showAlways, ingredients }) => {
  return (
    <section
      className={!showAlways ? `${s.container} ${s.adaptive}` : s.container}
    >
      <h3 className={s.title}>Ingredients:</h3>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing.id}>
            <Ingredient ing={ing} />
          </li>
        ))}
      </ul>
      <p className={s.total}>
        Total:{' '}
        {ingredients
          .reduce((acc, ingredient) => acc + ingredient.price, 0)
          .toFixed(2)}{' '}
        $
      </p>
    </section>
  );
};

export default Ingredients;
