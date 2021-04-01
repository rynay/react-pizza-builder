import s from './Ingredient.module.css';
import React from 'react';

const Ingredient = ({ ing, toggleIng }) => {
  console.log(ing);
  const toggle = () => {
    toggleIng && toggleIng(ing);
  };
  return (
    <section className={s.container} onClick={toggle}>
      <div className={s.image_container}>
        <img src={ing.preview} alt="" />
      </div>
      <div className={s.info}>
        <p>{ing.name}</p>
        <p>$ 0.50</p>
      </div>
    </section>
  );
};

export default Ingredient;
