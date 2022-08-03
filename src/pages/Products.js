import React from "react";
import Shop from "../context/Shop";
import MainNavigation from "../components/MainNavigation";
import "./Products.css";

const ProductsPage = props => {
  return (
    <Shop>
      {context => (
        <div>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className="products">
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <img src={product.img}></img> - ${product.price}
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(this, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      )}
    </Shop>
  );
};


export default ProductsPage;
