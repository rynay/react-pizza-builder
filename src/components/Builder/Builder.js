import { useDispatch } from 'react-redux';
import ingredients from '../../store/ingredients';
import { addIngredientAC } from '../../store/actions/ingredientsActions';

const Builder = () => {
  const dispatch = useDispatch();
  return (
    <section>
      {ingredients.map((ing) => (
        <h3
          key={ing.id}
          onClick={() => {
            dispatch(addIngredientAC(ing.id));
          }}
        >
          {ing.name}
        </h3>
      ))}
    </section>
  );
};

export default Builder;
