import { useState } from 'react';
import { data } from './data';
import Items from './Items';
import Buttons from './Buttons';
import Category from './Category';
import Coupon from './Coupon'
import ScrollButton from './ScrollButton';
import Sale from './Sale';

function Home () {
    const [item, setItem] = useState(data);
    const [showMore, setShowMore] = useState(false);
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
      const cartUsers = document.getElementById('cart');
       cartUsers.style.display = "block";
      
      if (!cart.find( element => element.id === id)){
       let userCart = [...cart];
   
      data.forEach( item => { 
         if (item.id === id ) {
          const itemToBuy = {...item};
          userCart.push (itemToBuy);
         }
        })
    
       setCart(userCart);
       }
     }
   
     const deleteItem = (id) => {
       let newCart = cart.filter(item => item.id !== id)
       setCart(newCart);
     }

     const chosenPriceCategory = (searchTerm) => {
         const newItems = data.filter(element => element.searchTerm.includes(searchTerm)
         );
         setItem(newItems);
      }
    
     const chosenItemCategory = (searchItem ) => {
        const newItems = data.filter(element => element.searchItem === searchItem);
        setItem(newItems);
      }
      
      return (
        <div className="App">
       
        <Buttons filteredItems = {chosenPriceCategory} />
        <div className='itemsSection'>
         <div className='chooseCategoryDiv'>
          <Category chosenItemCategory = {chosenItemCategory} />  
         </div>
         <div className='itemsDiv'>
          <Items itemData = {item} setItem = {setItem} showMore = {showMore} setShowMore = {setShowMore} addToCart = {addToCart} deleteItem = {deleteItem} cart = {cart} setCart = {setCart}/>  
         </div>
        </div>
       
        <Coupon />
        <ScrollButton />
       <div style = {{display: "none"}}>
         <Sale showMore = {showMore} setShowMore = {setShowMore}   addToCart = {addToCart} deleteItem = {deleteItem} cart = {cart} setCart = {setCart}/> 
       </div>
          
        
        </div>
      );
   
}

export default Home;