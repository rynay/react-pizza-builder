import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import s from './Preview.module.css';

const Preview = ({ location }) => {
  const page = location.pathname.slice(1);
  const allIngredients = useSelector((store) => store.allIngredients);
  const ingredients = useSelector((store) => store.ingredients);
  return (
    <section className={s.container}>
      {ingredients
        .filter((ing) => ing.type.includes('basic'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}
      {(page === 'sauce' ? allIngredients : ingredients)
        .filter((ing) => ing.type.includes('sauce'))
        .map((ing) => (
          <img
            key={ing.id}
            src={ing.img}
            alt={ing.name}
            style={{
              display: ing.added ? 'block' : 'none',
              zIndex:
                ingredients[ingredients.length - 1].img === ing.img ? '1' : '0',
            }}
          />
        ))}
      {(page === 'cheese' ? allIngredients : ingredients)
        .filter((ing) => ing.type.includes('cheese'))
        .map((ing) => (
          <img
            key={ing.id}
            src={ing.img}
            alt={ing.name}
            style={{
              display: ing.added ? 'block' : 'none',
              zIndex:
                ingredients[ingredients.length - 1].img === ing.img ? '2' : '1',
            }}
          />
        ))}
      {(page === 'topping' ? allIngredients : ingredients)
        .filter((ing) => ing.type.includes('topping'))
        .map((ing) => (
          <img
            key={ing.id}
            src={ing.img}
            alt={ing.name}
            style={{
              display: ing.added ? 'block' : 'none',
              zIndex:
                ingredients[ingredients.length - 1].img === ing.img ? '3' : '2',
            }}
          />
        ))}
    </section>
  );
};

export default withRouter(Preview);
