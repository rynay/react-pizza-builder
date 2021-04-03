import { useSelector } from 'react-redux';
import s from './Preview.module.css';

const Preview = () => {
  const allIngredients = useSelector((store) => store.allIngredients);
  return (
    <section className={s.container}>
      {allIngredients
        .filter((ing) => ing.type.includes('basic'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}

      {allIngredients
        .filter((ing) => ing.type.includes('sauce'))
        .map((ing) => (
          <img
            key={ing.id}
            src={ing.img}
            alt={ing.name}
            style={{ display: `${ing.added ? 'block' : 'none'}` }}
          />
        ))}
      {allIngredients
        .filter((ing) => ing.type.includes('cheese'))
        .map((ing) => (
          <img
            key={ing.id}
            src={ing.img}
            alt={ing.name}
            style={{ display: `${ing.added ? 'block' : 'none'}` }}
          />
        ))}
      {allIngredients
        .filter((ing) => ing.type.includes('topping'))
        .map((ing) => (
          <img
            key={ing.id}
            src={ing.img}
            alt={ing.name}
            style={{ display: `${ing.added ? 'block' : 'none'}` }}
          />
        ))}
    </section>
  );
};

export default Preview;
