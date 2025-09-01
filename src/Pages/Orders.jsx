import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.cart.orders);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        <ul className="space-y-6">
          {orders.map((order) => (
            <li
              key={order.id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Order #{order.id}</span>
                <span className="text-gray-500">{order.date}</span>
              </div>
              <ul className="pl-4 list-disc">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.title} (x{item.quantity}) — $
                    {(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
              <div className="mt-2 font-bold">
                Total: ${order.total.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
