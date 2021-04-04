import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeAllIngredientsAC } from '../../store/actions/ingredientsActions';
import Checkout from './Checkout';

const CheckoutContainer = ({ isOpen, close }) => {
  const dispatch = useDispatch();
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    close();
    dispatch(removeAllIngredientsAC());
    setOrdered(false);
  };

  const changeOrdered = () => {
    setOrdered(true);
  };

  return (
    <Checkout
      {...{
        ordered,
        isOpen,
        close,
        handleOrder,
        changeOrdered,
      }}
    />
  );
};

export default CheckoutContainer;
