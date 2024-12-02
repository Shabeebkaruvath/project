import '../css/Favorite.css'
import React from 'react'

function Cart() {
  const keyboard = {
    name: 'Sample keyboard',
    brand: 'Sample',
    type: 'mechanical',
    layout: 'QWERTY',
     
  };
  return (
    <div className='fav'>
      <table>
        <h5>Cart product list</h5>
        <tr>
        <th>Product Name</th>
          <th>Price</th>
          <th>Type</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>{keyboard.name}</td>
          <td>{keyboard.brand}</td>
          <td>{keyboard.type}</td>
          <td>{keyboard.layout}</td>
        </tr>
      </table>
    </div>
  );
}

export default Cart
