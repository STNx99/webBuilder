"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Link from 'next/link';

function DashBoardPage() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < window.screen.width / 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        isMobileView={isMobileView} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex flex-1 relative">
        {isMobileView && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div 
          className={`
            ${isMobileView ? 'fixed z-20 h-full transition-transform duration-300 ease-in-out' : ''}
            ${isMobileView && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
          `}
        >
          <Sidebar />
        </div>
        <main className={`flex-1 p-6 bg-gray-50 ${isMobileView ? 'w-full' : ''}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
            <Link href="/editor">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                <span className="mr-1">+</span> New Project
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-medium mb-2">Recent Activities</h3>
              <p className="text-gray-600">No recent activities found.</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default DashBoardPage;
