import { useState } from 'react';
import { data2 } from './data2';
import { data } from './data';
import { data3 } from './data3';
import { data4 } from './data4';
import './App.css';

function App() {

  const [candle, setCandle] = useState(data);
  const [vase, setVase] = useState(data2);
  const [pillow, setPillow] = useState(data3);
  const [botanic, setBotanic] = useState(data4);
  const [showMore, setShowMore] = useState(false);

 
  const removeItem = (id) => {
    let cart = candle.filter(item => item.id !== id)
    setCandle(cart);
  }

  const removeVase = (idVase) => {
     let cartVase = vase.filter(item => item.idVase !== idVase)
     setVase(cartVase);
   }

   const removePillow = (idP) => {
     let cartPillow = pillow.filter(item => item.idP !== idP)
     setPillow(cartPillow);
   }

   const removeBotanic = (idBot) => {
     let cartBotanic = botanic.filter(item => item.idBot !== idBot)
     setBotanic(cartBotanic);
   }

  
  return (
    <div className="App">

      <div className='heading'>
        <h1>HOME DECOR</h1>
        <h3>Our store offers  unique and eye-catching contemporary home accessories that you need for your home</h3>
      </div>

      <div className='section'>
      <div className='container'>
        <h2>CANDLES</h2>
      </div>
      
      <div className='container'>
      {candle.map((item => {
       const {id, name, price, description, image} = item;
       return (
        <div key = {id} className='div'>
           <h4>{id}. {name}</h4>
           <img src={image} alt="candle" width="250px" height="250px"/>
           <h4>{price}</h4>
           <p>{showMore ? description : description.substring(0, 40)}
           <button className="moreBtn" onClick = {() => setShowMore(!showMore)}>{showMore ? "less" : "more..."}</button>
           </p>
           <button className='btn' onClick={() => removeItem(id)}>ADD</button>
         </div>
            )
          }))}
       </div>
    <div className='container'>
     <button className='addBtn' onClick={() => setCandle([])}>ADD ALL</button> 
    </div>
    
    </div>

    <div className='section'>
    <div className='container'>
        <h2>VASES</h2>
    </div>
      <div className='container'>
      {vase.map((item => {
       const {idVase, nameVase, priceVase, descriptionVase, imageVase} = item;
       return (
         <div key = {idVase} className='div'>
           <h4>{idVase}. {nameVase}</h4>
           <img src={imageVase} alt="vase" width="250px" height="320px"/>
           <h4>{priceVase}</h4>
           <p>{showMore ? descriptionVase : descriptionVase.substring(0, 40)}
           <button className="moreBtn" onClick = {() => setShowMore(!showMore)}>{showMore ? "less" : "more..."}</button>
           </p>
           <button className='btn' onClick={() => removeVase(idVase)}>ADD</button>
         </div>
         
       )
     }))}
     
    </div>

    <div className='container'>
    <button className='addBtn' onClick={() => setVase([])}>ADD ALL</button>
    </div>
    </div>

    <div className='section'>
      <div className='container'>
        <h2>PILLOWS</h2>
      </div>
      <div className='container'>
      {pillow.map((item => {
       const {idP, nameP, priceP, descriptionP, imageP} = item;
       return (
         <div key = {idP} className='div'>
           <h4>{idP}. {nameP}</h4>
           <img src={imageP} alt="pillow" width="250px" height="250px"/>
           <h4>{priceP}</h4>
           <p>{showMore ? descriptionP : descriptionP.substring(0, 40)}
           <button className="moreBtn" onClick = {() => setShowMore(!showMore)}>{showMore ? "less" : "more..."}</button>
           </p>
           <button className='btn' onClick={() => removePillow(idP)}>ADD</button>
         </div>
         
       )
     }))}
     
    </div>
    <div className='container'>
     <button className='addBtn' onClick={() => setPillow([])}>ADD ALL</button> 
    </div>
    
    </div>

    <div className='section'>
      <div className='container'>
        <h2>BOTANICALS</h2>
      </div>
      <div className='container'>
      {botanic.map((item => {
       const {idBot, nameBot, priceBot, descriptionBot, imageBot} = item;
       return (
         <div key = {idBot} className='div'>
           <h4>{idBot}. {nameBot}</h4>
           <img src={imageBot} alt="botanicals" width="250px" height="320px"/>
           <h4>{priceBot}</h4>
           <p>{showMore ? descriptionBot : descriptionBot.substring(0, 40)}
           <button className="moreBtn" onClick = {() => setShowMore(!showMore)}>{showMore ? "less" : "more..."}</button>
           </p>
           <button className='btn' onClick={() => removeBotanic(idBot)}>ADD</button>
         </div>
         
       )
     }))}
     
    </div>
    <div className='container'>
     <button className='addBtn' onClick={() => setBotanic([])}>ADD ALL</button> 
    </div>
    
    </div>


    </div>
  );
}

export default App;
