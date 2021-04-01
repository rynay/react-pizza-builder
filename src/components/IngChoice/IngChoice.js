import Ingredient from '../Ingredient';

const IngChoice = ({ ingredients, type, toggleIng }) => {
  return (
    <section>
      {ingredients
        .filter((ing) => ing.type === type)
        .map((ing) => (
          <Ingredient key={ing.id} ing={ing} toggleIng={toggleIng} />
        ))}
    </section>
  );
};

export default IngChoice;
