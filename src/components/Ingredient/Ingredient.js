import s from './Ingredient.module.css';
import React from 'react';

const Ingredient = ({ ing, toggleIng }) => {
  const added = ing.added;
  const toggle = () => {
    toggleIng && toggleIng(ing);
  };
  return (
    <section
      className={
        toggleIng ? `${s.container}  ${added ? s.added : ''}` : s.list_container
      }
      onClick={toggle}
    >
      <div className={toggleIng ? s.image_container : s.small_image_container}>
        <img src={ing.preview} alt="" />
      </div>
      <div className={s.info}>
        <p className={s.name}>{ing.name}</p>
        {/* <p>$ 0.50</p> */}
      </div>
    </section>
  );
};

export default Ingredient;
