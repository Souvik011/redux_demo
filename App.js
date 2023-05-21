import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { UiActions } from "./components/store/UiReducer";
import NotificationHandling from "./components/UI/NotificationHandling";

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        UiActions.showNotification({
          status: "pending",
          title: "sending",
          message: "Sending cart data.!",
        })
      );
      const response = await fetch(
        "https://fir-redux-d508e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        UiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully.!",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        UiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed.!",
        })
      );
    });
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
