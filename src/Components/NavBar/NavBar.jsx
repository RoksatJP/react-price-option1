import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '/blog', name: 'Blog' }
  ];



  return (
    <nav className="text-black">
       
       
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {
          open ? <IoMdClose size={24} />
            : <AiOutlineMenu size={24} className="" />
        }

      </div>
      <ul className="md:flex absolute bg-green-700">
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>

    </nav>
  );
};

export default NavBar;