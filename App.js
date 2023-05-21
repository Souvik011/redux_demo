import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import NotificationHandling from "./components/UI/NotificationHandling";
import { sendCartData , fetchCartData } from "./components/store/cart-actions";

let isInitial = true ;
function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch]);

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }

    if(cart.changes){
      dispatch(sendCartData(cart));
    }
   
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <NotificationHandling
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
