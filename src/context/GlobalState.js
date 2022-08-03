import React, { useState, useReducer } from "react";

import ShopContext from "./Shop";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
  const products = [
    { id: "p1", img: "image1.jpeg", price: 2500},
    // { id: "p2", title: "Product2", price: 3000 },
    // { id: "p3", title: "Product3", price: 2999 },
    // { id: "p4", title: "Product4", price: 1500 }
  ];

  const [cartState, setCartstate] = useReducer(shopReducer, { cart: [] });


  const addProductToCart = function(product) {
      setCartstate({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = function(productId) {
      setCartstate({ type: REMOVE_PRODUCT, productId: productId });
  }; 
  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
