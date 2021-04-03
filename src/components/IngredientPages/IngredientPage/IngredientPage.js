import IngChoice from '../../IngChoice';
import { Link } from 'react-router-dom';

const IngredientPage = ({
  toggleWarning,
  s,
  type,
  types,
  i,
  currentIngredients,
  allIngredients,
  toggleIng,
}) => {
  return (
    <>
      <div className={s.navbar}>
        {types[i - 1] && (
          <Link className={s.back} to={`/${types[i - 1]}`}>
            &#8592;{' '}
            <span>{types[i - 1][0].toUpperCase() + types[i - 1].slice(1)}</span>
          </Link>
        )}
        <h2>{type[0].toUpperCase() + type.slice(1)}</h2>
        {types[i + 1] && (
          <Link
            onClick={() => {
              !currentIngredients.some((ing) => ing.type === type) &&
                toggleWarning(type);
            }}
            className={s.next}
            to={
              currentIngredients.some((ing) => ing.type === type)
                ? `/${types[i + 1]}`
                : `/${type}`
            }
          >
            <span>{types[i + 1][0].toUpperCase() + types[i + 1].slice(1)}</span>{' '}
            &#8594;
          </Link>
        )}
      </div>
      <IngChoice
        ingredients={allIngredients}
        type={type}
        toggleIng={toggleIng}
      />
    </>
  );
};

export default IngredientPage;
