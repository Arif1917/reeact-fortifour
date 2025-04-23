import { CircleCheckBig} from 'lucide-react';
import React from 'react';
import Cards from '../components/Cards/Cards';

const Card = ({card}) => {
    const {name, price, features} = card
    return (
        <div className='bg-amber-300 px-5 py-4 rounded-2xl flex flex-col  '>
            <h2 className='text-2xl font-normal'>Name:{name}</h2>
            <h2 className='text-xl'>Price:{price}</h2>
            {/* <p className='bg-emerald-500 p-4 rounded-2xl mt-2'>{description}</p> */}
            <div className='mt-4 bg-pink-600  flex-1 p-2 rounded-2xl '>
               
                {
                    features.map((feature, index) => <Cards key={index} feature={feature}></Cards>)
                }

          
            </div>
            <button className="btn w-full mt-3 bg-blue-500">Wide</button>
        </div>
    );
};

export default Card;