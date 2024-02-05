import React from "react";

const Basket = ({ basketItems, onRemoveFromBasket }) => {
  return (
    <div>
      <h2>Basket</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <ul>
          {basketItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => onRemoveFromBasket(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Basket;
