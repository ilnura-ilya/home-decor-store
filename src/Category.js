function Category ({chosenItemCategory}){
   return (
      <div className="CategoryChoose">
         <button className="btnCateg" onClick = {() => chosenItemCategory("vase")}>VASES</button>
         <button className="btnCateg" onClick = {() => chosenItemCategory("candle")}>CANDLES</button>
         <button className="btnCateg" onClick = {() => chosenItemCategory("pillow")}>PILLOWS</button>
         <button className="btnCateg" onClick = {() => chosenItemCategory("botanic")}>BOTANICALS</button>
      </div>
   )
}

export default Category;