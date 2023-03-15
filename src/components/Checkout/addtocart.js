var ButomSelectProducts
console.log(ButomSelectProducts);

function addToCart(itemId, quantity) {
    // Find the item in the database based on its ID
    const item = database.find(item => item.id === itemId);
  
    // Add the item to the cart array with the specified quantity
    cart.push({ item, quantity });
  }
