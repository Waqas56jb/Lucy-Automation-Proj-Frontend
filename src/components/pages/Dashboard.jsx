import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FiUser } from 'react-icons/fi';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <FiUser className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome back!</h2>
            <p className="text-gray-600">{user?.username || user?.email}</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Username</p>
              <p className="font-medium text-gray-800">{user?.username || 'N/A'}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Email</p>
              <p className="font-medium text-gray-800">{user?.email || 'N/A'}</p>
            </div>
            {user?.phone_number && (
              <div>
                <p className="text-gray-500 mb-1">Phone Number</p>
                <p className="font-medium text-gray-800">{user.phone_number}</p>
              </div>
            )}
            {user?.country && (
              <div>
                <p className="text-gray-500 mb-1">Country</p>
                <p className="font-medium text-gray-800">{user.country}</p>
              </div>
            )}
            <div>
              <p className="text-gray-500 mb-1">Verification Status</p>
              <p className="font-medium text-gray-800">
                <span className={`px-2 py-1 rounded text-xs ${user?.is_verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {user?.is_verified ? 'Verified' : 'Not Verified'}
                </span>
              </p>
            </div>
            {user?.loginTime && (
              <div>
                <p className="text-gray-500 mb-1">Login Time</p>
                <p className="font-medium text-gray-800">{new Date(user.loginTime).toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">0</h3>
          <p className="text-gray-600 text-sm">Total Transcripts</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">0</h3>
          <p className="text-gray-600 text-sm">Stories Generated</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">0</h3>
          <p className="text-gray-600 text-sm">Videos Trimmed</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-600 rounded"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">0</h3>
          <p className="text-gray-600 text-sm">Posts Scheduled</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition text-left">
            <h4 className="font-semibold text-gray-800 mb-1">Create Transcript</h4>
            <p className="text-sm text-gray-600">Start a new transcription</p>
          </button>
          <button className="p-4 border-2 border-green-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition text-left">
            <h4 className="font-semibold text-gray-800 mb-1">Generate Story</h4>
            <p className="text-sm text-gray-600">Create a new story</p>
          </button>
          <button className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition text-left">
            <h4 className="font-semibold text-gray-800 mb-1">Trim Video</h4>
            <p className="text-sm text-gray-600">Edit your video</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

