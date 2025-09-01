import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQty,
  decrementQty,
  addOrder, // ✅ import new reducer
} from "../Redux/cartSlice";
import toast from "react-hot-toast";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("❌ Item removed");
  };

  // ✅ Checkout logic with order save
  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    try {
      // Fake API call (mock checkout)
      await axios.post("https://fakestoreapi.com/carts", {
        userId: 1,
        date: new Date(),
        products: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
      });

      // ✅ Save order in Redux
      const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: cart,
        total,
      };

      dispatch(addOrder(order));
      dispatch(clearCart());
      toast.success("✅ Checkout successful!");
    } catch (error) {
      console.error(error);
      toast.error("Checkout failed, try again!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => dispatch(decrementQty(item.id))}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQty(item.id))}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <span className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="font-bold text-lg">Total: ${total.toFixed(2)}</h3>
            <div className="flex gap-3">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
