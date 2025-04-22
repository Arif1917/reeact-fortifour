import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Cards = ({feature}) => {
    return (
        <div>
            <p className='flex text-sm mt-4 bg-pink-600 p-2 rounded-2xl'><CircleCheckBig className='mr-4'></CircleCheckBig>{feature}</p>
        </div>
    );
};

export default Cards;