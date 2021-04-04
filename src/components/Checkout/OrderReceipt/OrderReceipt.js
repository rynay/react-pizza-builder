import { Link } from 'react-router-dom';

const OrderReceipt = ({ s, handleOrder }) => {
  return (
    <div className={s.message_container}>
      <h2>Thank you for the order!</h2>
      <Link onClick={handleOrder} className={s.button} to="/sauce">
        Back
      </Link>
    </div>
  );
};

export default OrderReceipt;
