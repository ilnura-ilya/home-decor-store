function Buttons ({filteredItems, handleToggle}){
   return (
      <div  className='priceCategDiv'>
         <div className="checkPrice">
      <label onClick={(e) => handleToggle(e)} htmlFor="above60" className="filter">Above $60</label>
         <input type="checkbox" name="types" className="btnPrice" value= "above60" id="above60" onClick = {() => filteredItems()}/>
      </div>  
      <div className="checkPrice">
      <label onClick={(e) => handleToggle(e)} htmlFor="under50" className="filter">
         Under $50</label>
         <input type="checkbox" name="types" className="btnPrice"  value="under50" id="under50" onClick = {() => filteredItems()}/>
         </div>
      <div className="checkPrice">   
      <label onClick={(e) => handleToggle(e)} htmlFor="50to60" className="filter">
         $50 -$60</label>
         <input type="checkbox" name="types" className="btnPrice" value="50to60" id="50to60" onClick = {() => filteredItems()}/>
      </div>
      </div>

   )
}

export default Buttons;