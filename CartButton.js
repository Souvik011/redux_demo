import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { UiActions } from '../store/UiReducer';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartItem = useSelector(state => state.cart.totalQuantity);
  const cartVisibleHandler = () => {
    dispatch(UiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={cartVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItem}</span>
    </button>
  );
};

export default CartButton;
