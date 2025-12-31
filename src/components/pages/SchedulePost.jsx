import React, { useState, useRef, useEffect } from 'react';
import { FiCalendar, FiPlus, FiUpload, FiLink, FiX, FiFile } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';

const SchedulePost = () => {
  const { user } = useAuth();
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const [googleSheetsUrl, setGoogleSheetsUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [embedUrl, setEmbedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Get storage key based on user email
  const getStorageKey = () => {
    if (!user?.email) return null;
    return `google_sheet_url_${user.email}`;
  };

  // Load saved Google Sheets URL on component mount
  useEffect(() => {
    if (user?.email) {
      const storageKey = `google_sheet_url_${user.email}`;
      const savedUrl = localStorage.getItem(storageKey);
      if (savedUrl) {
        // Auto-load the saved sheet
        setEmbedUrl(savedUrl);
        setGoogleSheetsUrl(savedUrl);
        // Show a subtle notification that sheet was auto-loaded
        toast.info('Your saved Google Sheet has been loaded automatically', {
          autoClose: 2000,
        });
      }
    }
  }, [user?.email]);

  // Save Google Sheets URL to localStorage
  const saveSheetUrl = (url) => {
    const storageKey = getStorageKey();
    if (storageKey && url) {
      localStorage.setItem(storageKey, url);
    }
  };

  // Remove saved Google Sheets URL from localStorage
  const removeSheetUrl = () => {
    const storageKey = getStorageKey();
    if (storageKey) {
      localStorage.removeItem(storageKey);
    }
  };
  
  const handleUrlSubmit = async () => {
    if (!googleSheetsUrl.trim()) {
      toast.error('Please enter a Google Sheets URL');
      return;
    }

    setIsLoading(true);
    try {
      // Extract sheet ID and GID from URL
      const { sheetId, gid } = extractSheetInfo(googleSheetsUrl);
      if (!sheetId) {
        toast.error('Invalid Google Sheets URL. Please check the URL format.');
        setIsLoading(false);
        return;
      }

      // Create embed URL for viewing and editing
      let embedUrlValue = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing`;
      if (gid) {
        embedUrlValue = `https://docs.google.com/spreadsheets/d/${sheetId}/edit#gid=${gid}`;
      }
      setEmbedUrl(embedUrlValue);
      
      // Save to localStorage with user email reference
      saveSheetUrl(embedUrlValue);
      
      setShowUploadOptions(false);
      toast.success('Google Sheets loaded and saved successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to load Google Sheets. Please make sure the sheet is publicly accessible.');
      console.error('Error loading Google Sheets:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const extractSheetInfo = (url) => {
    // Extract sheet ID and GID from various Google Sheets URL formats
    const sheetIdPatterns = [
      /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/,
      /\/d\/([a-zA-Z0-9-_]+)/,
      /id=([a-zA-Z0-9-_]+)/
    ];

    let sheetId = null;
    for (const pattern of sheetIdPatterns) {
      const match = url.match(pattern);
      if (match) {
        sheetId = match[1];
        break;
      }
    }

    // Extract GID (sheet tab ID) if present
    const gidMatch = url.match(/[#&]gid=(\d+)/);
    const gid = gidMatch ? gidMatch[1] : null;

    return { sheetId, gid };
  };


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
      'application/vnd.google-apps.spreadsheet'
    ];

    if (!validTypes.includes(file.type) && !file.name.match(/\.(xlsx|xls|csv)$/i)) {
      toast.error('Please upload a valid spreadsheet file (Excel, CSV)');
      return;
    }

    setUploadedFile(file);
    setIsLoading(true);

    // Read file and create a data URL for viewing
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        // For uploaded files, we'll use a simple viewer
        // In a real scenario, you might want to upload to Google Drive first
        toast.info('File uploaded. For full editing capabilities, please use Google Sheets URL instead.');
        setShowUploadOptions(false);
      } catch (error) {
        toast.error(error.message || 'Failed to process file. Please try again.');
        console.error('Error processing file:', error);
      } finally {
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
      toast.error('Failed to read file. Please try again.');
      setIsLoading(false);
    };

    reader.readAsDataURL(file);
  };

  const clearSpreadsheet = () => {
    // Remove from localStorage
    removeSheetUrl();
    
    setGoogleSheetsUrl('');
    setUploadedFile(null);
    setEmbedUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    toast.info('Google Sheets removed. You can load a new one anytime.');
  };

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
          {!embedUrl && (
            <button 
              onClick={() => setShowUploadOptions(true)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base min-h-[44px] w-full sm:w-auto"
            >
              <FiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">Load Spreadsheet</span>
            </button>
          )}
          {embedUrl && (
            <button 
              onClick={clearSpreadsheet}
              className="flex items-center justify-center gap-2 bg-gray-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-700 transition text-sm sm:text-base min-h-[44px] w-full sm:w-auto"
            >
              <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">Clear</span>
          </button>
          )}
        </div>

        {/* Upload Options Modal */}
        {showUploadOptions && !embedUrl && (
          <div className="mb-6 bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Load Google Sheets</h3>
              <button
                onClick={() => setShowUploadOptions(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition"
              >
                <FiX className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4">
              {/* URL Input Option */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FiLink className="inline w-4 h-4 mr-2" />
                  Paste Google Sheets URL
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    value={googleSheetsUrl}
                    onChange={(e) => setGoogleSheetsUrl(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base min-h-[44px]"
                  />
                  <button
                    onClick={handleUrlSubmit}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base min-h-[44px] whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Loading...' : 'Load URL'}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  💡 Make sure your Google Sheet is set to "Anyone with the link can view" in sharing settings
                </p>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">OR</span>
                </div>
              </div>

              {/* File Upload Option */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FiUpload className="inline w-4 h-4 mr-2" />
                  Upload Spreadsheet File
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition"
                >
                  <FiFile className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    <span className="text-blue-600 hover:text-blue-700">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Excel (.xlsx, .xls) or CSV files
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                {uploadedFile && (
                  <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiFile className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">{uploadedFile.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        setUploadedFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      className="p-1 hover:bg-green-100 rounded"
                    >
                      <FiX className="w-4 h-4 text-green-600" />
                </button>
                  </div>
                )}
              </div>
            </div>
        </div>
        )}

        {/* Spreadsheet Display - Original Google Sheets Embed */}
        {embedUrl ? (
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg" style={{ height: '80vh', minHeight: '600px' }}>
            <iframe
              src={embedUrl}
              className="w-full h-full"
              frameBorder="0"
              title="Google Sheets"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ) : !showUploadOptions ? (
          <div className="text-center py-8 sm:py-10 lg:py-12 border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl px-4">
            <FiCalendar className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No Scheduled Posts</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Load your Google Sheets to start scheduling posts</p>
            <button
              onClick={() => setShowUploadOptions(true)}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base min-h-[44px]"
            >
              Load Spreadsheet
            </button>
        </div>
        ) : null}
      </div>
    </div>
  );
};

export default SchedulePost;

