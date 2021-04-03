import { useSelector } from 'react-redux';
import s from './Preview.module.css';

const Preview = () => {
  const ingredients = useSelector((store) => store.ingredients);
  return (
    <section className={s.container}>
      {ingredients
        .filter((ing) => ing.type.includes('basic'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}
      {ingredients
        .filter((ing) => ing.type.includes('sauce'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}
      {ingredients
        .filter((ing) => ing.type.includes('cheese'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}
      {ingredients
        .filter((ing) => ing.type.includes('topping'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}
    </section>
  );
};

export default Preview;
