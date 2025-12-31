import React from 'react';
import { FiCalendar, FiClock, FiPlus } from 'react-icons/fi';

const SchedulePost = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <FiCalendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Schedule Post</h2>
              <p className="text-gray-600">Manage your scheduled posts</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
            <FiPlus className="w-5 h-5" />
            Schedule New Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-gray-600">Scheduled</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Post Title {item}</h3>
              <p className="text-gray-600 text-sm mb-4">Description of the scheduled post...</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Jan 15, 2024 at 10:00 AM</span>
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
          <FiCalendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Scheduled Posts</h3>
          <p className="text-gray-600 mb-6">Start scheduling your posts to appear here</p>
        </div>
      </div>
    </div>
  );
};

export default SchedulePost;

