import React from 'react';
const dataNavigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
const Navbar = () => {


    return (
        <div>
            <nav className='flex items-center justify-between px-10 py-4'>
                <h2 className='text-3xl font-medium'>Navbar</h2>
               
                <ul className='flex'>
                    {
                        dataNavigation.map(data => <li key={data.id} className='mr-10'><a href={data.path}>{data.name}</a></li>)
                    }
                </ul>

                <button className='text-2xl text-black bg-amber-500 rounded-xl px-4 py-2'>Sign In</button>
          </nav>
        </div>
    );
};

export default Navbar;