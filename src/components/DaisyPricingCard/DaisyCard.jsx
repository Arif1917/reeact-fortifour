import React from 'react';
import ShowDaisy from './ShowDaisy';

const DaisyCard = ({daisys}) => {
    console.log(daisys)
    return (
        <div className=' '>
            <div className="card w-96  shadow-sm bg-amber-100 ">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{daisys.name}</h2>
      <span className="text-xl">{daisys.price}</span>
    </div>
    <div className=''>
    <ul className="mt-6 flex flex-col gap-2 text-xs ">
      
      {
         daisys.features.map((feature,index) =><li key={index}>
             <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>{feature}</span>
           </li> )
      }
     </ul>
    </div>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DaisyCard;