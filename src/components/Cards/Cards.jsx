import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Cards = ({feature}) => {
    return (
        <div>
            <p className='flex items-center text-sm mt-2 rounded-2xl '><CircleCheckBig className='mr-4'></CircleCheckBig>{feature}</p>
            
        </div>
    );
};

export default Cards;