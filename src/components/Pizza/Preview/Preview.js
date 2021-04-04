import s from './Preview.module.css';
import ImagesPreloader from '../../ImagesPreloader';

const Preview = ({ page, ingredients, allIngredients }) => {
  const targets = ['sauce', 'cheese', 'topping'];

  return (
    <section className={s.container}>
      {ingredients
        .filter((ing) => ing.type.includes('basic'))
        .map((ing) => (
          <img key={ing.id} src={ing.img} alt={ing.name} />
        ))}

      {targets.map((target, idx) => (
        <ImagesPreloader
          key={idx}
          {...{
            page,
            target,
            ingredients,
            allIngredients,
          }}
        />
      ))}
    </section>
  );
};

export default Preview;
