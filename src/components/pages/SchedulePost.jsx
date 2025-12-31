import React from 'react';
import { FiCalendar, FiClock, FiPlus } from 'react-icons/fi';

const SchedulePost = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FiCalendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Schedule Post</h2>
              <p className="text-sm sm:text-base text-gray-600">Manage your scheduled posts</p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
            <FiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">Schedule New Post</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-blue-500 transition">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <FiClock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">Scheduled</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Post Title {item}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Description of the scheduled post...</p>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-500">Jan 15, 2024 at 10:00 AM</span>
                <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium min-h-[32px] px-2">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8 text-center py-8 sm:py-10 lg:py-12 border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl px-4">
          <FiCalendar className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No Scheduled Posts</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Start scheduling your posts to appear here</p>
        </div>
      </div>
    </div>
  );
};

export default SchedulePost;

