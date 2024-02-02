import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ShoppingCart = ({ cart }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container mx-auto mt-8 bg-gray-400 p-5 h-36 rounded-lg w-auto flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 uppercase">Shopping Cart</h2>
      <ul>
        {cart
          .reduce((x, item) => {
            const existingItem = x.find(
              (cartItem) => cartItem.code === item.code
            );

            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              x.push({ ...item, quantity: 1 });
            }

            return x;
          }, [])
          .map((cartItem) => (
            <li key={cartItem.code}>
              {cartItem.generic_name} - Quantity: {cartItem.quantity}
            </li>
          ))}
      </ul>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      generic_name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ShoppingCart;
