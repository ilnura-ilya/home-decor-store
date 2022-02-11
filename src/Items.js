function Item ({itemData, setItem, showMore, setShowMore}){

  const removeItem = (id) => {
      let cart = itemData.filter(item => item.id !== id)
      setItem(cart);
    }

  const handleShowMore = (item) => {
    item.showMore = !item.showMore
    setShowMore(!showMore)
  }

   return(
      <div className='section'>
      
      <div className='container'>
      {itemData.map((item => {
       const {id, name, price, description, image, showMore} = item;
       return (
        <div key = {id} className='div'>
           <h4>{name}</h4>
           <img src={image} alt="candle"/>
           <h4>{price}</h4>
           <p className="description">{showMore ? description : description.substring(0, 40)}
           <button className="moreBtn" onClick={() => handleShowMore(item)}>{showMore ? " less" : " more"}</button>
           </p>
           <button className='btn' onClick={() => removeItem(id)}>ADD</button>
         </div>
            )
          }))}
       </div>
       <div className='container'>
     <button className='addBtn' onClick={() => setItem([])}>ADD ALL</button> 
    </div>
    
    </div>

   )
}

export default Item;