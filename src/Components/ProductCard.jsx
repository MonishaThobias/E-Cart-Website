import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slice/CartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ product}) => {
  const dispatch = useDispatch();
   const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("✅ Added to cart!");
  };
  return (
    <div className="border rounded-2xl shadow-md hover:shadow-xl transition p-4 bg-white flex flex-col">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4 rounded-lg"
      />

      {/* Product Info */}
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-bold text-blue-600">${product.price}</span>
        <button  onClick={handleAddToCart}
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
