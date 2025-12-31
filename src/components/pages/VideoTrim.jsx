import React from 'react';
import { FiScissors, FiUpload, FiPlay } from 'react-icons/fi';

const VideoTrim = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
            <FiScissors className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Video Trim</h2>
            <p className="text-gray-600">Edit and trim your videos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-500 transition">
            <FiUpload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Video</h3>
            <p className="text-gray-600 mb-6">Select a video file to trim</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Choose Video File
            </button>
          </div>

          <div className="border-2 border-gray-200 rounded-xl p-8">
            <div className="bg-gray-100 rounded-lg p-8 mb-6 flex items-center justify-center">
              <FiPlay className="w-16 h-16 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <input
                  type="text"
                  placeholder="00:00:00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                <input
                  type="text"
                  placeholder="00:00:00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Trim Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTrim;

