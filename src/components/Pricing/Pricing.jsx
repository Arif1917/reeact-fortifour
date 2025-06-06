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
        <div className=' gap-8 px-10 py-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                cards.map(card =><Card card={card} key={card.id}></Card>)
            }
        </div>
    );
};

export default Pricing;