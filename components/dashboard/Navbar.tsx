import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  isMobileView: boolean;
  toggleSidebar: () => void;
}

const Navbar = ({ isMobileView, toggleSidebar }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        {isMobileView && (
          <button 
            onClick={toggleSidebar} 
            className="mr-4 text-gray-600 hover:text-gray-900"
            aria-label="Toggle sidebar"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        )}
        <Link href="/">
            <Image src="/logo.jpg" alt="Logo" width={isMobileView ? 80 : 100} height={isMobileView ? 26 : 32} />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-100 relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
            />
          </svg>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          {!isMobileView && <span>User</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
