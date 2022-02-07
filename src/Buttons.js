function Buttons ({filteredItems}){
   return (
      <div className="container">
      <button className="btnPrice" onClick = {() => filteredItems("above60")}>Above $60</button>
      <button className="btnPrice" onClick = {() => filteredItems("under50")}>Under $50</button>
      <button className="btnPrice" onClick = {() => filteredItems("50to60")}>$50 -$60</button>
      </div>

   )
}

export default Buttons;