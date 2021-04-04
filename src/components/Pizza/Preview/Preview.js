import s from './Preview.module.css';
import ImagesPreloader from '../../ImagesPreloader';

const Preview = ({ page, ingredients, allIngredients }) => {
  return (
    <section className={s.container}>
      {ingredients
        .filter((ing) => ing.type.includes('basic'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}
      <ImagesPreloader
        {...{
          page,
          ingredients,
          allIngredients,
        }}
      />
    </section>
  );
};

export default Preview;
