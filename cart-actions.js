import { UiActions } from "./UiReducer";
import { CartActions } from "./CartReducer";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://fir-redux-d508e-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch the data !. ");
      }

      const data = await response.json();

      return data;
    };

    try {
        const cartData = await fetchdata();
        dispatch(CartActions.replaceCart({items:cartData.items || [], totalQuantity:cartData.totalQuantity}));
    } catch (error) {
      dispatch(
        UiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed!...",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UiActions.showNotification({
        status: "pending",
        title: "sending....",
        message: "Sending cart data.!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://fir-redux-d508e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items:cart.items , totalQuantity:cart.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();

      dispatch(
        UiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully!...",
        })
      );
    } catch (error) {
      dispatch(
        UiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!...",
        })
      );
    }
  };
};
