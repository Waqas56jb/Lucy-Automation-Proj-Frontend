import React from 'react';
import { FiVideo, FiZap } from 'react-icons/fi';

const StoryGenerate = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <FiVideo className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Story Generate</h2>
            <p className="text-sm sm:text-base text-gray-600">Create engaging stories from your content</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-blue-500 transition">
            <FiZap className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Generate from Transcript</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Convert your transcripts into engaging stories</p>
            <button className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
              Generate Story
            </button>
          </div>

          <div className="border-2 border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-blue-500 transition">
            <FiVideo className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Generate from Video</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Create stories directly from video content</p>
            <button className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
              Upload Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryGenerate;

