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
      {(page === 'sauce' &&
      !ingredients.find((item) => item.type === 'sauce' && item.added)
        ? allIngredients
        : ingredients
      )
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
      {(page === 'cheese' &&
      !ingredients.find((item) => item.type === 'cheese' && item.added)
        ? allIngredients
        : ingredients
      )
        .filter((ing) => ing.type.includes('cheese'))
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
      {(page === 'topping' &&
      !ingredients.find((item) => item.type === 'topping' && item.added)
        ? allIngredients
        : ingredients
      )
        .filter((ing) => ing.type.includes('topping'))
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
    </section>
  );
};

export default withRouter(Preview);
