import Pizza from '../Pizza';
import Builder from '../Builder';
import s from './App.module.css';

const App = () => {
  return (
    <main className={s.App}>
      <Pizza />
      <Builder />
    </main>
  );
};

export default App;
