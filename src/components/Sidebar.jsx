import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FiLayout,
  FiFileText,
  FiZap,
  FiScissors,
  FiCalendar,
  FiSettings,
  FiLogOut,
  FiX,
} from 'react-icons/fi';
import logo from '../assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: FiLayout, exact: true },
    { path: '/dashboard/transcript', label: 'Transcript', icon: FiFileText },
    { path: '/dashboard/story-generate', label: 'Story Generate', icon: FiZap },
    { path: '/dashboard/video-trim', label: 'Video Trim', icon: FiScissors },
    { path: '/dashboard/schedule-post', label: 'Schedule Post', icon: FiCalendar },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto lg:h-screen
          w-64 sm:w-72
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header / Logo */}
          <div className="relative flex items-center justify-center px-4 sm:px-6 py-5 sm:py-6 border-b border-slate-700/60 bg-slate-800/50">
            <div className="flex items-center justify-center w-full">
              <img 
                src={logo} 
                alt="Lucy Automation Logo" 
                className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-slate-700/70 rounded-lg transition-all duration-200 active:scale-95"
              aria-label="Close sidebar"
            >
              <FiX className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 sm:py-5 px-3 sm:px-4 min-h-0 custom-scrollbar">
            <ul className="space-y-1.5 sm:space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.exact}
                      onClick={() => {
                        // Close sidebar on mobile/tablet when item is clicked
                        if (window.innerWidth < 1024) {
                          toggleSidebar();
                        }
                      }}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                            : 'text-slate-300 hover:bg-slate-700/60 hover:text-white hover:scale-[1.01]'
                        }`
                      }
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'group-hover:scale-110' : ''}`} />
                      <span className="font-semibold text-sm sm:text-base leading-tight">{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Settings & Logout Section - Fixed at bottom */}
          <div className="mt-auto border-t border-slate-700/60 bg-slate-800/30 px-3 sm:px-4 py-3 sm:py-4 space-y-2">
            <NavLink
              to="/dashboard/settings"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  toggleSidebar();
                }
              }}
              className={({ isActive }) =>
                `group flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'text-slate-300 hover:bg-slate-700/60 hover:text-white hover:scale-[1.01]'
                }`
              }
            >
              <FiSettings className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-200 group-hover:rotate-90" />
              <span className="font-semibold text-sm sm:text-base">Settings</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-slate-300 hover:bg-red-600/20 hover:text-red-400 hover:border-red-500/30 transition-all duration-200 font-semibold group border border-transparent hover:border-red-500/30"
            >
              <FiLogOut className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              <span className="text-sm sm:text-base">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

