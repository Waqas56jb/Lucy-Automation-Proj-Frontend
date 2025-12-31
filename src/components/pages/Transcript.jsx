import React from 'react';
import { FiFileText, FiUpload } from 'react-icons/fi';

const Transcript = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <FiFileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Transcript</h2>
            <p className="text-sm sm:text-base text-gray-600">Manage your transcripts</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-12 text-center hover:border-blue-500 transition">
          <FiUpload className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Upload Audio/Video</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Drag and drop your file here or click to browse</p>
          <button className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base min-h-[44px] w-full sm:w-auto sm:min-w-[140px]">
            Choose File
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transcript;

