import React from 'react';
import { FiVideo, FiZap } from 'react-icons/fi';

const StoryGenerate = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
            <FiVideo className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Story Generate</h2>
            <p className="text-gray-600">Create engaging stories from your content</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 transition">
            <FiZap className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Generate from Transcript</h3>
            <p className="text-gray-600 mb-4">Convert your transcripts into engaging stories</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
              Generate Story
            </button>
          </div>

          <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition">
            <FiVideo className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Generate from Video</h3>
            <p className="text-gray-600 mb-4">Create stories directly from video content</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Upload Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryGenerate;

