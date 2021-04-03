import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  addIngredientAC,
  removeIngredientAC,
} from '../../store/actions/ingredientsActions';
import { toggleAddedAC } from '../../store/actions/allIngredientsActions';
import s from './Builder.module.css';

import IngredientPages from '../IngredientPages';
import { useState } from 'react';

const Builder = ({ isModalOpen, closeModal, openModal }) => {
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
    <section className={s.container}>
      <div className={`${s.warning} ${isOpenWarning ? s.show_warning : ''}`}>
        Please choose a {currentType}!
      </div>
      <Redirect from="/" to="/sauce" />
      <IngredientPages
        openModal={openModal}
        toggleWarning={toggleWarning}
        types={types}
        currentIngredients={currentIngredients}
        allIngredients={ingredients}
        toggleIng={toggleIng}
      />
    </section>
  );
};

export default Builder;
