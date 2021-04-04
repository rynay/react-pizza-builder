import Preview from '../../Pizza/Preview';
import Ingredients from '../../Pizza/Ingredients';
const OrderDetails = ({ s, close, changeOrdered }) => {
  return (
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
        <button className={s.button} onClick={changeOrdered}>
          $ Order &#8594;
        </button>
      </div>
    </>
  );
};

export default OrderDetails;
