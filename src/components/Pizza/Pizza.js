import Preview from './Preview';
import Ingredients from './Ingredients';
import s from './Pizza.module.css';

const Pizza = () => {
  return (
    <section className={s.container}>
      <Preview />
      <Ingredients />
    </section>
  );
};

export default Pizza;
