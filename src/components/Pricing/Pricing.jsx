import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const Pricing = () => {

   const [cards, setCards] =useState([])
   useEffect(()=>{
    fetch("pricing.json")
    .then(res =>res.json())
    .then(data =>setCards(data))
   },[])
// console.log(cards)
    return (
        <div className='grid grid-cols-3 gap-8 px-10 py-4'>
            {
                cards.map(card =><Card card={card} key={card.id}></Card>)
            }
        </div>
    );
};

export default Pricing;