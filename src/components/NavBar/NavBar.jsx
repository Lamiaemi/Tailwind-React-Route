import React, { useState } from 'react';
import Link from './Link';
import { LogIn, Menu, X } from 'lucide-react';
import { Divide as Hamburger } from "hamburger-react";


const navigationData = [
  {
    name: "Home",
    path: "/home",
    id: 1,
  },
  {
    name: "About Us",
    path: "/about-us",
    id: 2,
  },
  {
    name: "Services",
    path: "/services",
    id: 3,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 4,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 5,
  },
];


const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const [isOpen, setOpen] = useState(false);
    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)
    return (
      <nav className="flex justify-between mt-4 mx-8 items-center">
        <span className="flex items-center" onClick={() => setOpen(!open)}>
          {/* {open ? <X className="lg:hidden" /> : <Menu className="lg:hidden" />} */}
          <span className='lg:hidden'>
            <Hamburger toggled={open} toggle={setOpen} />
          </span>
          <ul
            className={`absolute top-16 ${
              open ? "left-8" : "-left-44"
            } duration-700 bg-teal-100 px-10 lg:hidden`}
          >
            {links}
          </ul>
          <span className="text-4xl docs ml-4">LAMIATAMIA</span>
        </span>
        <ul className="lg:flex hidden gap-8">{links}</ul>
        <button className="btn btn-accent btn-outline">
          Log In
          <LogIn />
        </button>
      </nav>
    );
};

export default Navbar;