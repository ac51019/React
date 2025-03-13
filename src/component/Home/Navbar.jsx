import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-blue-500 p- shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">BrandLogo</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-white">
                    <li className="hover:text-gray-300 cursor-pointer">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer">About</li>
                    <li className="hover:text-gray-300 cursor-pointer">Services</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden cursor-pointer text-white" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-blue-400 p-4 space-y-4 text-white text-center">
                    <li className="hover:text-gray-300 cursor-pointer">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer">About</li>
                    <li className="hover:text-gray-300 cursor-pointer">Services</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                    <span
        class="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
        id="basic-addon2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </span>
                </ul>
                
            )}

            
        </nav>
    );
};

export default Navbar;

