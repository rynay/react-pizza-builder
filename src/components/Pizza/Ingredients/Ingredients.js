import { useSelector } from 'react-redux';
import s from './Ingredients.module.css';

const Ingredients = () => {
  const ingredients = useSelector((store) => store.ingredients);
  return (
    <section className={s.container}>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing.id}>{ing.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
