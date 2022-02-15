import { useState } from 'react';
import { saleData } from './saleData';

function Sale () {

   const [sale, setSale] = useState(saleData);
   
   const setShowMore = (id) => {
      const newItems = [];
      sale.forEach(item => {
          if (item.id === id) {
              const changedItem = {...item, showMore: !item.showMore};
              newItems.push(changedItem);
          } else {
              newItems.push(item);
          }
      });
      setSale(newItems); 
  }
  
    
  return(
   <div className="section">
      <div className="container">
       {sale.map((item => {
       const {id, name,  oldPrice, newPrice, price, description, image, showMore} = item;
       
       return (
        <div key = {id} className='div'>
           <h4>{name}</h4>
           <img src={image} alt="candle"/>
           <h4 className="del">{oldPrice}</h4>
           <h4 className="newPrice">{newPrice}</h4>
           <h4>{price}</h4>
           <p className="description">{showMore ? description : description.substring(0, 50)}
           <button className="moreBtn" onClick={() => setShowMore(id)}>{showMore ? " less" : " more"}</button>
           </p>
           <button className='btn'>ADD</button>
         </div>
            )
          }))}
          </div>
       </div>
   
   )
}

export default Sale;