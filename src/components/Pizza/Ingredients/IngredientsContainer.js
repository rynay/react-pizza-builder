import { useSelector } from 'react-redux';
import Ingredients from './Ingredients';

const IngredientsContainer = ({ showAlways }) => {
  const ingredients = useSelector((store) => store.ingredients);
  return (
    <Ingredients
      {...{
        showAlways,
        ingredients,
      }}
    />
  );
};

export default IngredientsContainer;
