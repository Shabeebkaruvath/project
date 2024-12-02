import React from 'react'
import '../css/Favorite.css'
function Favourite () {
  const keyboard = {
    name: 'Sample keyboard',
    price: '700',
    type: 'mechanical',
    rating: '4.5',
     
  };
  return (
    <div className='fav'>
      <table>
        <h5>Favourite product list</h5>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Type</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>{keyboard.name}</td>
          <td>{keyboard.price}</td>
          <td>{keyboard.type}</td>
          <td>{keyboard.rating}</td>
        </tr>
      </table>
    </div>
  );
}

export default Favourite 
