import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.png';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar on route change for mobile
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard' || path === '/dashboard/') return 'Dashboard';
    if (path.includes('transcript')) return 'Transcript';
    if (path.includes('story-generate')) return 'Story Generate';
    if (path.includes('video-trim')) return 'Video Trim';
    if (path.includes('schedule-post')) return 'Schedule Post';
    if (path.includes('settings')) return 'Settings';
    return 'Dashboard';
  };

  return (
    <div className="min-h-screen h-screen bg-gray-100 flex flex-col overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0 overflow-hidden bg-gray-50 h-screen w-full lg:w-auto">
        {/* Top Header with Toggle Button */}
        <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleSidebar}
                  className="lg:hidden p-1.5 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors touch-manipulation"
                  aria-label="Toggle sidebar"
                  type="button"
                >
                  <FiMenu className="w-4 h-4 text-gray-600" />
                </button>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{getPageTitle()}</h1>
              </div>
              <div className="hidden sm:flex items-center">
                <img 
                  src={logo} 
                  alt="Lucy Automation" 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-0">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Lucy Automation" 
                className="h-6 w-auto object-contain"
              />
              <span>© 2024 Lucy Automation. All rights reserved.</span>
            </div>
            <div className="text-xs text-gray-500">
              Version 1.0.0
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;

