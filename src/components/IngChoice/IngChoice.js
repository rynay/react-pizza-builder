import Ingredient from '../Ingredient';
import s from './IngChoice.module.css';

const IngChoice = ({ ingredients, type, toggleIng }) => {
  return (
    <section className={s.container}>
      {ingredients
        .filter((ing) => ing.type === type)
        .map((ing) => (
          <Ingredient key={ing.id} ing={ing} toggleIng={toggleIng} />
        ))}
    </section>
  );
};

export default IngChoice;
