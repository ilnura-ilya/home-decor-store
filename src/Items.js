
function Item ({itemData, setItem,  showMore, setShowMore, addToCart, deleteItem, cart, setCart}){

  const handleShowMore = (item) => {
    item.showMore = !item.showMore
    setShowMore(!showMore)
  }

return(
      <div className='section'>
        <div id= "cart" className="cart">
          <h4>My Shopping Cart</h4>
          {cart.map( item => {
       const {id, name, price, } = item;
       return(
         
         <ul key={id} className='item-to-buy'>
             <li className='item-name'>
                <span>{name},</span>
                <span>{price}</span>
            </li>
            <button className='item-btn' onClick = {()=> deleteItem(id)}>X</button>
         </ul>
        
       )})}
         <button className='addBtn' onClick={() => setCart([])}>DELETE ALL</button> 
</div>
   
      <div className='container'>
      {itemData.map((item => {
       const {id, name,  oldPrice, newPrice, price, description, image, showMore} = item;
       
       return (
        <div key = {id} className='div'>
           <h4>{name}</h4>
           <img src={image} alt="candle"/>
           <h4 className="del">{oldPrice}</h4>
           <h4 className="newPrice">{newPrice}</h4>
           <h4>{price}</h4>
           <p className="description">{showMore ? description : description.substring(0, 50)}
           <button className="moreBtn" onClick={() => handleShowMore(item)}>{showMore ? " less" : " more"}</button>
           </p>
           <button className='btn' onClick={() => addToCart(id)}>ADD</button>
         </div>
            )
          }))}
       </div>
       
    
    </div>

   )
}


export default Item;