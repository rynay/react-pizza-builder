import { Redirect } from 'react-router-dom';
import s from './Builder.module.css';

import IngredientPages from '../IngredientPages';

const Builder = ({
  types,
  toggleWarning,
  toggleIng,
  openModal,
  isOpenWarning,
  ingredients,
  currentIngredients,
  currentType,
}) => {
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
