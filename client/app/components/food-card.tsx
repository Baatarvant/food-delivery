"use client";

import { useCart } from "@/lib/context/use-cart";
import { Food } from "@/lib/types/common";

export const FoodCard = ({ food }: { food: Food }) => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cartItems.find((item) => item.foodId === food.id);

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-3">
      <h3 className="font-semibold text-lg">{food.name}</h3>
      <p className="text-gray-600">${food.price}</p>

      {cartItem ? (
        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={() =>
              cartItem.quantity === 1
                ? removeFromCart(food.id)
                : updateQuantity(food.id, cartItem.quantity - 1)
            }
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
          >
            -
          </button>
          <span className="font-medium">{cartItem.quantity}</span>
          <button
            onClick={() => updateQuantity(food.id, cartItem.quantity + 1)}
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(food)}
          className="mt-auto bg-black text-white rounded-lg py-2 px-4 hover:bg-gray-800"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
