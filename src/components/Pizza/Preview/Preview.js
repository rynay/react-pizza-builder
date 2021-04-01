import { useSelector } from 'react-redux';
import s from './Preview.module.css';

const Preview = () => {
  const ingredients = useSelector((store) => store.ingredients);

  return (
    <section className={s.container}>
      {ingredients.map((ing) => (
        <img key={ing.id} src={ing.img} alt={ing.name} />
      ))}
    </section>
  );
};

export default Preview;
