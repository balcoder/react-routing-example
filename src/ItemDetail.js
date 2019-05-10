import React, {useState, useEffect} from 'react';

function ItemDetail({ match }) {
  //console.log(match);// wehn we link to a path that path will have a match object with the url that was passed
  useEffect(() => {
    getDetail();
  }, []);

  const [item, setItem] = useState({
    images: {} //need to declare images obj here or get undefined when rendering <img src={item.images.transparent}></img>
  })

  const getDetail = async () => {
    const data = await(fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`));
    const item = await(data.json());
    setItem(item);
    console.log(item);
    console.log(item.images.transparent)
  }


  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{`Cost: ${item.cost}`}</h2>
      <h3>{`Description: ${item.description}`}</h3>
      <img src={item.images.transparent}></img>
    </div>
  );
}

export default ItemDetail;
