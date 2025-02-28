import React from 'react';

const Sidebar = () => {
  const navItems = [
    { name: 'Recents', icon: '🕒' },
    { name: 'Projects', icon: '📁' },
    { name: 'Reports', icon: '📝' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-full min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">WebBuilder</h2>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-8 pr-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
