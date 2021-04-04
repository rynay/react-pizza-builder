import { useDispatch, useSelector } from 'react-redux';
import {
  addIngredientAC,
  removeIngredientAC,
} from '../../store/actions/ingredientsActions';
import { toggleAddedAC } from '../../store/actions/allIngredientsActions';
import { useState } from 'react';
import Builder from './Builder';

const BuilderContainer = ({ openModal }) => {
  const [currentType, setCurrentType] = useState('');
  const [isOpenWarning, setIsOpenWarning] = useState(false);
  const ingredients = useSelector((store) => store.allIngredients);
  const currentIngredients = useSelector((store) => store.ingredients);
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

  const toggleWarning = (type) => {
    setCurrentType(type);
    setIsOpenWarning(true);
    setTimeout(() => {
      setIsOpenWarning(false);
    }, 2000);
  };

  const types = ['sauce', 'cheese', 'topping'];

  return (
    <Builder
      {...{
        types,
        toggleWarning,
        toggleIng,
        openModal,
        isOpenWarning,
        ingredients,
        currentIngredients,
        currentType,
      }}
    />
  );
};

export default BuilderContainer;
