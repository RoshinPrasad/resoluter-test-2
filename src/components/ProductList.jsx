// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://world.openfoodfacts.org/api/v0/product/737628064502.json"
        );
        const productData = response.data.product;
        setProducts([productData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="flex">
      <div className="flex-3 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.code} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default ProductList;
