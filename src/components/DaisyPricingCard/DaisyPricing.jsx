import React, { useEffect, useState } from 'react';
import DaisyCard from './DaisyCard';

const DaisyPricing = () => {
     const [daisyCard, setDaisyCard] =useState([])
     useEffect(()=>{
        fetch('pricing.json')
        .then( res => res.json())
        .then(data =>setDaisyCard(data))
     },[])
   //   console.log(daisyCard)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-4  '>
           {
             daisyCard.map(daisys => <DaisyCard key={daisys.id} daisys={daisys}></DaisyCard>)
           }
        </div>
    );
};

export default DaisyPricing;