import { CircleCheckBig} from 'lucide-react';
import React from 'react';
import Cards from '../components/Cards/Cards';

const Card = ({card}) => {
    const {name, price, description, features} = card
    return (
        <div className='bg-amber-300 px-10 py-4 rounded-2xl'>
            <h2 className='text-2xl font-normal'>Name:{name}</h2>
            <h2 className='text-xl'>Price:{price}</h2>

            <div className='mt-8'>
                <p className='bg-emerald-500 p-4 rounded-2xl'>{description}</p>
                {
                    features.map((feature, index) => <Cards key={index} feature={feature}></Cards>)
                }

                
            </div>
        </div>
    );
};

export default Card;