import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="b08e0c4d-34db-4873-9960-955af4ec1244.png"
              alt="Logo"
            />
            <div className="hidden md:flex ml-10 space-x-4">
              <NavLink to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </NavLink>
              <NavLink to="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Shop
              </NavLink>
              <NavLink to="/cart" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Cart
              </NavLink>
              <NavLink to="/orders" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Orders
              </NavLink>
            </div>
          </div>

          
          <div className="flex items-center space-x-4">
            
            <button className="text-gray-400 hover:text-white">
              <span className="sr-only">View notifications</span>
              🔔
            </button>

          
            <div className="relative">
              <button className="rounded-full bg-gray-600 p-1">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pravatar.cc/100"
                  alt="User"
                />
              </button>
             
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
        <NavLink to="/" className="block text-white px-3 py-2 rounded-md text-base font-medium">
          Home
        </NavLink>
        <NavLink to="/products" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          Shop
        </NavLink>
        <NavLink to="/cart" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          Cart
        </NavLink>
        <NavLink to="/orders" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          Orders
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
