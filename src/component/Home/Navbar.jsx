import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
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
                </ul>
            )}
        </nav>
    );
};

export default Navbar;