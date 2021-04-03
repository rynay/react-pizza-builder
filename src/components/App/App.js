import { useState } from 'react';
import Pizza from '../Pizza';
import Builder from '../Builder';
import s from './App.module.css';

import Checkout from '../Checkout';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className={s.App}>
      <Pizza />
      <Builder {...{ openModal, closeModal, isModalOpen }} />
      <Checkout isOpen={isModalOpen} close={closeModal} />
    </main>
  );
};

export default App;
