import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const dataNavigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
const Navbar = () => {

    const [open, setOpen] = useState(false)
    const links =  dataNavigation.map(data => <li key={data.id} className='md:mr-10 px-4 hover:bg-gray-400'><a href={data.path}>{data.name}</a></li>)
    

    return (
        <div>
            <nav className='flex items-center justify-between px-10 py-4'>
                

               <span onClick={()=> setOpen(!open)} className='flex mr-10'>
                { open ? <X size={45} color='black' className='md:hidden'></X> : <Menu size={45} color='black' className='md:hidden'/>}
                <ul className={`md:hidden absolute ${open ? 'top-16' : '-top-40'} duration-700 bg-amber-400`}>
                {
                    links
                }
              </ul>
                <h2 className='text-3xl font-medium'>Navbar</h2>
               </span>
              
            
                <ul className='md:flex hidden'>
                   {
                    links
                   }
                </ul>

                <button className='text-2xl text-black bg-amber-500 rounded-xl px-4 py-2'>Sign In</button>
          </nav>
        </div>
    );
};

export default Navbar;