import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    getItems();
  },[]); { /* [] means that this will only run when the component mounts */}

  const [items, setItems] = useState([])

  const getItems = async () => {
    const data = await(fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"));
    const items = await data.json();
    console.log(items.items);
    setItems(items.items)
  }
  return (
    <div className="shop">
      <h1>Shop</h1>
        <ul>
          {items.map(item => (
            <h1 key={item.itemid}>
            <Link to={"shop/" + item.itemid}>{item.name}</Link> 
            </h1>
          ))}

        </ul>
    </div>
  );
}

export default Shop;
