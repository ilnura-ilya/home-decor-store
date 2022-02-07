import { useState } from 'react';
import { data } from './data';
import Items from './Items';
import Buttons from './Buttons';
import Category from './Category';


function Home () {
    const [item, setItem] = useState(data);

     const chosenPriceCategory = (searchTerm) => {
         const newItems = data.filter(element => element.searchTerm === searchTerm
         );
         setItem(newItems);
      }
    
      const chosenItemCategory = (searchItem) => {
        const chosenItems = data.filter(element => element.searchItem === searchItem);
        setItem(chosenItems);
      }
       
      
      return (
        <div className="App">
           
        <Buttons filteredItems = {chosenPriceCategory} />
        <div className='itemsSection'>
         <div className='chooseCategoryDiv'>
          <Category chosenItemCategory = {chosenItemCategory}/>  
         </div>
         <div className='itemsDiv'>
          <Items itemData = {item} setItem = {setItem} />   
         </div>
          
        </div>
        
       
     
        
        </div>
      );
   
}

export default Home;