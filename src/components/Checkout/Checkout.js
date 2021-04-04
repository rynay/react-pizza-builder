import s from './Checkout.module.css';
import OrderDetails from './OrderDetails';
import OrderReceipt from './OrderReceipt';

const Checkout = ({ isOpen, close, ordered, handleOrder, changeOrdered }) => {
  return (
    <>
      <div className={`${s.overlay} ${isOpen ? s.open : ''}`}></div>
      <div className={`${s.container} ${isOpen ? s.open : ''}`}>
        {ordered ? (
          <OrderReceipt {...{ s, handleOrder }} />
        ) : (
          <OrderDetails
            {...{
              s,
              close,
              changeOrdered,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Checkout;
