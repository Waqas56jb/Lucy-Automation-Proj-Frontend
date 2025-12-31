import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  FiUser, 
  FiFileText, 
  FiZap, 
  FiScissors, 
  FiCalendar,
  FiTrendingUp,
  FiArrowRight
} from 'react-icons/fi';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
      {/* Welcome Section */}
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-white">
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-white/30 flex-shrink-0">
              <FiUser className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 truncate">Welcome back, {user?.username || 'User'}!</h1>
              <p className="text-sm sm:text-base text-blue-100">Here's what's happening with your account today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {/* Transcripts Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <FiFileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">0</h3>
          <p className="text-gray-600 text-xs sm:text-sm font-medium">Total Transcripts</p>
          <p className="text-xs text-gray-500 mt-1 sm:mt-2">+0% from last month</p>
        </div>

        {/* Stories Generated Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <FiZap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">0</h3>
          <p className="text-gray-600 text-xs sm:text-sm font-medium">Stories Generated</p>
          <p className="text-xs text-gray-500 mt-1 sm:mt-2">+0% from last month</p>
        </div>

        {/* Videos Trimmed Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <FiScissors className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">0</h3>
          <p className="text-gray-600 text-xs sm:text-sm font-medium">Videos Trimmed</p>
          <p className="text-xs text-gray-500 mt-1 sm:mt-2">+0% from last month</p>
        </div>

        {/* Posts Scheduled Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <FiCalendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">0</h3>
          <p className="text-gray-600 text-xs sm:text-sm font-medium">Posts Scheduled</p>
          <p className="text-xs text-gray-500 mt-1 sm:mt-2">+0% from last month</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <button 
            onClick={() => navigate('/dashboard/transcript')}
            className="group p-4 sm:p-5 border-2 border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left min-h-[100px] sm:min-h-[120px]"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <FiFileText className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Create Transcript</h4>
            <p className="text-xs sm:text-sm text-gray-600">Start a new transcription project</p>
          </button>

          <button 
            onClick={() => navigate('/dashboard/story-generate')}
            className="group p-4 sm:p-5 border-2 border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left min-h-[100px] sm:min-h-[120px]"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <FiZap className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Generate Story</h4>
            <p className="text-xs sm:text-sm text-gray-600">Create engaging stories from content</p>
          </button>

          <button 
            onClick={() => navigate('/dashboard/video-trim')}
            className="group p-4 sm:p-5 border-2 border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left min-h-[100px] sm:min-h-[120px]"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <FiScissors className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Trim Video</h4>
            <p className="text-xs sm:text-sm text-gray-600">Edit and trim your videos</p>
          </button>

          <button 
            onClick={() => navigate('/dashboard/schedule-post')}
            className="group p-4 sm:p-5 border-2 border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left min-h-[100px] sm:min-h-[120px]"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <FiCalendar className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Schedule Post</h4>
            <p className="text-xs sm:text-sm text-gray-600">Plan and schedule your posts</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

