import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiMenu } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

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
    <div className="min-h-screen h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 h-screen w-full">
        {/* Top Header with Toggle Button */}
        <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
          <div className="px-4 sm:px-5 lg:px-8 py-4 sm:py-5 lg:py-4">
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <button
                  onClick={toggleSidebar}
                  className="lg:hidden p-2.5 sm:p-3 hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-all duration-200 touch-manipulation flex-shrink-0 z-50 relative"
                  aria-label="Toggle sidebar"
                  type="button"
                  style={{ zIndex: 50 }}
                >
                  <FiMenu className="w-6 h-6 sm:w-5 sm:h-5 text-gray-700" />
                </button>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">{getPageTitle()}</h1>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                {/* Logo - visible on all screens including mobile */}
                <div className="flex items-center flex-shrink-0">
                  <img 
                    src={logo} 
                    alt="Lucy Automation" 
                    className="h-8 sm:h-9 lg:h-8 w-auto object-contain"
                  />
                </div>
                {/* Username - visible on all screens including mobile */}
                {user?.username && (
                  <div className="flex items-center">
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-100 rounded-lg whitespace-nowrap">
                      {user.username}
                    </span>
                  </div>
                )}
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

