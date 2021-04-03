import Preview from '../Pizza/Preview';
import Ingredients from '../Pizza/Ingredients';
import s from './Checkout.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeAllIngredientsAC } from '../../store/actions/ingredientsActions';

const Checkout = ({ isOpen, close }) => {
  const dispatch = useDispatch();
  const [ordered, setOrdered] = useState(false);
  return (
    <>
      <>
        <div className={`${s.overlay} ${isOpen ? s.open : ''}`}></div>
        <div className={`${s.container} ${isOpen ? s.open : ''}`}>
          {!ordered && (
            <>
              <h2 className={s.title}>Your order:</h2>
              <div className={s.flex_container}>
                <div className={s.preview}>
                  <Preview small />
                </div>
                <div className={s.ingredients}>
                  <Ingredients showAlways />
                </div>
              </div>
              <div className={s.buttons_container}>
                <button className={s.button} onClick={close}>
                  &#8592; Back
                </button>
                <button
                  className={s.button}
                  onClick={() => {
                    setOrdered(true);
                  }}
                >
                  $ Order &#8594;
                </button>
              </div>
            </>
          )}
          {ordered && (
            <div className={s.message_container}>
              <h2>Thank you for the order!</h2>
              <Link
                onClick={() => {
                  close();
                  dispatch(removeAllIngredientsAC());
                }}
                className={s.button}
                to="/sauce"
              >
                Back
              </Link>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Checkout;
