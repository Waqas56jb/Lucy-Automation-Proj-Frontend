import React from 'react';
import { FiFileText, FiUpload } from 'react-icons/fi';

const Transcript = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <FiFileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Transcript</h2>
            <p className="text-gray-600">Manage your transcripts</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition">
          <FiUpload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Audio/Video</h3>
          <p className="text-gray-600 mb-6">Drag and drop your file here or click to browse</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Choose File
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transcript;

