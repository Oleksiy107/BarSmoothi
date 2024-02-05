import React from "react";
import { useState } from "react";
import { smoothies } from "../JSON/ReadySM";
import Basket from "../Menu/Basket/Basket";
const SmoothieShow = () => {
  const [basketItems, setSelectedSmoothies] = useState([]);

  const handleAddToSelection = (smoothie) => {
    setSelectedSmoothies([...basketItems, smoothie]);
  };

  const deleteByIndex = (index) => {
    setSelectedSmoothies((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  const calculateTotalSum = () => {
    return basketItems.reduce((total, smoothie) => total + smoothie.price, 0);
  };

  return (
    <div>
      <h1>Smoothie Shop</h1>
      <div>
        {smoothies.map((smoothie, index) => (
          <div key={index}>
            <h3>{smoothie.name}</h3>
            <p>Price: ${smoothie.price}</p>
            <p>{smoothie.description}</p>
            <button onClick={() => handleAddToSelection(smoothie)}>
              Add to Selection
            </button>
          </div>
        ))}
      </div>
      <Basket basketItems={basketItems} onDelete={deleteByIndex} />
      <div>
        <h2>Total Sum: ${calculateTotalSum()}</h2>
      </div>
    </div>
  );
};
export default SmoothieShow;
