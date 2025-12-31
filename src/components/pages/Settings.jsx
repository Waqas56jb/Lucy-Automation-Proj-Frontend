import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  FiSettings, 
  FiUpload, 
  FiFile, 
  FiCheckCircle, 
  FiX,
  FiAlertCircle
} from 'react-icons/fi';
import { SiYoutube, SiTiktok, SiFacebook, SiLinkedin } from 'react-icons/si';
import { toast } from 'react-toastify';

const Settings = () => {
  const { user } = useAuth();
  
  // Create refs for each platform
  const youtubeRef = useRef(null);
  const tiktokRef = useRef(null);
  const facebookRef = useRef(null);
  const linkedinRef = useRef(null);
  
  const getFileInputRef = (platformId) => {
    switch(platformId) {
      case 'youtube': return youtubeRef;
      case 'tiktok': return tiktokRef;
      case 'facebook': return facebookRef;
      case 'linkedin': return linkedinRef;
      default: return null;
    }
  };
  
  const [credentials, setCredentials] = useState({
    youtube: null,
    tiktok: null,
    facebook: null,
    linkedin: null,
  });

  const [draggedPlatform, setDraggedPlatform] = useState(null);

  const platforms = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: SiYoutube,
      color: 'bg-red-500',
      gradient: 'from-red-500 to-red-600',
      description: 'Upload your YouTube API credentials JSON file',
      fileType: '.json',
      accept: '.json,application/json',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: SiTiktok,
      color: 'bg-black',
      gradient: 'from-gray-900 to-black',
      description: 'Configure TikTok API credentials',
      fileType: '.json',
      accept: '.json,application/json',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: SiFacebook,
      color: 'bg-blue-600',
      gradient: 'from-blue-600 to-blue-700',
      description: 'Configure Facebook API credentials',
      fileType: '.json',
      accept: '.json,application/json',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: SiLinkedin,
      color: 'bg-blue-700',
      gradient: 'from-blue-700 to-blue-800',
      description: 'Configure LinkedIn API credentials',
      fileType: '.json',
      accept: '.json,application/json',
    },
  ];

  const handleFileSelect = (platformId, file) => {
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith('.json')) {
      toast.error('Please upload a JSON file');
      return;
    }

    // Store file info (in production, you'd upload to server)
    const fileInfo = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      file: file, // Store the file object
    };

    setCredentials((prev) => ({
      ...prev,
      [platformId]: fileInfo,
    }));

    toast.success(`${platforms.find(p => p.id === platformId)?.name} credentials uploaded successfully!`);
  };

  const handleDragOver = (e, platformId) => {
    e.preventDefault();
    setDraggedPlatform(platformId);
  };

  const handleDragLeave = () => {
    setDraggedPlatform(null);
  };

  const handleDrop = (e, platformId) => {
    e.preventDefault();
    setDraggedPlatform(null);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(platformId, file);
    }
  };

  const handleFileInputChange = (e, platformId) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(platformId, file);
    }
    // Reset input to allow re-uploading the same file
    e.target.value = '';
  };

  const handleRemoveFile = (platformId) => {
    setCredentials((prev) => ({
      ...prev,
      [platformId]: null,
    }));
    toast.info(`${platforms.find(p => p.id === platformId)?.name} credentials removed`);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <FiSettings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Platform Settings</h2>
            <p className="text-gray-600 mt-1">Configure your social media platform credentials</p>
          </div>
        </div>
      </div>

      {/* Platform Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const hasCredentials = credentials[platform.id] !== null;
          const isDragged = draggedPlatform === platform.id;

          return (
            <div
              key={platform.id}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                isDragged
                  ? 'border-blue-500 bg-blue-50'
                  : hasCredentials
                  ? 'border-green-200'
                  : 'border-gray-200'
              }`}
              onDragOver={(e) => handleDragOver(e, platform.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, platform.id)}
            >
              {/* Platform Header */}
              <div className={`bg-gradient-to-r ${platform.gradient} rounded-t-2xl p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                      <p className="text-white/80 text-sm mt-1">{platform.description}</p>
                    </div>
                  </div>
                  {hasCredentials && (
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/30">
                      <FiCheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-white text-sm font-semibold">Connected</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Platform Content */}
              <div className="p-6">
                {hasCredentials ? (
                  /* Uploaded File Display */
                  <div className="space-y-4">
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                            <FiFile className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{credentials[platform.id].name}</p>
                            <p className="text-sm text-gray-600">
                              {formatFileSize(credentials[platform.id].size)} •{' '}
                              {new Date(credentials[platform.id].lastModified).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFile(platform.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors group"
                          title="Remove credentials"
                        >
                          <FiX className="w-5 h-5 text-red-600 group-hover:text-red-700" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => getFileInputRef(platform.id)?.current?.click()}
                      className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                      <FiUpload className="w-5 h-5" />
                      Replace Credentials File
                    </button>
                    <input
                      ref={getFileInputRef(platform.id)}
                      type="file"
                      accept={platform.accept}
                      onChange={(e) => handleFileInputChange(e, platform.id)}
                      className="hidden"
                      id={`file-input-${platform.id}`}
                    />
                  </div>
                ) : (
                  /* File Upload Area */
                  <div>
                    <label
                      htmlFor={`file-input-${platform.id}`}
                      className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
                        isDragged
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/30'
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FiUpload className={`w-12 h-12 mb-4 ${isDragged ? 'text-blue-600' : 'text-gray-400'}`} />
                        <p className="mb-2 text-sm font-semibold text-gray-700">
                          <span className="text-blue-600 hover:text-blue-700">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          {platform.fileType.toUpperCase()} file only
                        </p>
                      </div>
                      <input
                        type="file"
                        id={`file-input-${platform.id}`}
                        accept={platform.accept}
                        onChange={(e) => handleFileInputChange(e, platform.id)}
                        className="hidden"
                      />
                    </label>

                    {/* Info Box */}
                    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-3">
                      <FiAlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-1">How to get credentials:</p>
                        <p className="text-blue-700">
                          Download your {platform.name} API credentials file from the developer console and upload it here.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Account Settings Section (Optional - keep user settings) */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <p className="text-gray-900 font-semibold">{user?.username || 'N/A'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <p className="text-gray-900 font-semibold">{user?.email || 'N/A'}</p>
          </div>
          {user?.phone_number && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <p className="text-gray-900 font-semibold">{user.phone_number}</p>
            </div>
          )}
          {user?.country && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <p className="text-gray-900 font-semibold">{user.country}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
