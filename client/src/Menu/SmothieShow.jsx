import React, { useState } from "react";

const SmoothieShow = () => {
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToBasket = (smoothie) => {
    setBasketItems([...basketItems, smoothie]);
  };

  return (
    <div>
      <h1>Smoothie Shop</h1>
      <div>
        {smoothies.map((smoothie, index) => (
          <Smoothie
            key={index}
            smoothie={smoothie}
            onAddToBasket={handleAddToBasket}
          />
        ))}
      </div>
      <Basket items={basketItems} />
    </div>
  );
};

export default SmoothieShow;
