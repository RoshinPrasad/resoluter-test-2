import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, addToCart }) => {
  return (
    <div className="bg-slate-950 border border-black p-4 rounded-md shadow-md flex flex-col items-center w-3/4">
      <img
        src={product.selected_images?.front?.small?.en}
        alt={product.product_name}
        className="mx-auto mb-2 rounded-md"
        style={{ maxWidth: "100px" }}
      />
      <h2 className="text-lg text-center font-semibold text-white">
        {product.generic_name}
      </h2>
      <h2 className="text-sm text-center font-semibold text-white">
        {product.product_name}
      </h2>
      <p className="text-white">Group# {product.food_groups.toUpperCase()}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-green-700 text-white px-4 py-2 mt-2 rounded font-serif"
      >
        Add to Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    selected_images: PropTypes.shape({
      front: PropTypes.shape({
        small: PropTypes.shape({
          en: PropTypes.string,
        }),
      }),
    }),
    generic_name: PropTypes.string,
    product_name: PropTypes.string,
    food_groups: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
