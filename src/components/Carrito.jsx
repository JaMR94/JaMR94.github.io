
// esta es la sentencia del boton para el off canvas
{/* <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}

import { useState, useEffect } from 'react';

const Carrito = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-unid.000webhostapp.com/order_detail')
      .then(response => response.json())
      .then(data => setItems(data.rows))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">YOUR CART</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <hr />
      <div className="offcanvas-body">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={item.id} className="mb-4">
              <p>Product ID: {item.product_id}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              {index !== items.length - 1 && <hr />}
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Carrito;



