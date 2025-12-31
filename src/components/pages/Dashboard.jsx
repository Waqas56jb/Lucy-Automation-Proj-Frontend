import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  FiUser, 
  FiFileText, 
  FiZap, 
  FiScissors, 
  FiCalendar,
  FiTrendingUp,
  FiActivity,
  FiEye,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiBarChart2,
  FiPieChart,
  FiDollarSign,
  FiTarget,
  FiAward,
  FiDownload,
  FiUpload,
  FiRefreshCw,
  FiGlobe,
  FiMessageSquare,
  FiHeart,
  FiShare2,
  FiThumbsUp
} from 'react-icons/fi';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(windowWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dummy data for charts
  const weeklyData = [
    { name: 'Mon', transcripts: 12, stories: 8, videos: 5, posts: 15 },
    { name: 'Tue', transcripts: 19, stories: 12, videos: 8, posts: 22 },
    { name: 'Wed', transcripts: 15, stories: 10, videos: 6, posts: 18 },
    { name: 'Thu', transcripts: 22, stories: 14, videos: 9, posts: 25 },
    { name: 'Fri', transcripts: 18, stories: 11, videos: 7, posts: 20 },
    { name: 'Sat', transcripts: 14, stories: 9, videos: 5, posts: 16 },
    { name: 'Sun', transcripts: 10, stories: 6, videos: 4, posts: 12 }
  ];

  const monthlyData = [
    { month: 'Jan', value: 450, target: 500 },
    { month: 'Feb', value: 520, target: 500 },
    { month: 'Mar', value: 480, target: 500 },
    { month: 'Apr', value: 610, target: 500 },
    { month: 'May', value: 580, target: 500 },
    { month: 'Jun', value: 650, target: 500 }
  ];

  const platformData = [
    { name: 'YouTube', value: 35, color: '#EF4444' },
    { name: 'TikTok', value: 28, color: '#000000' },
    { name: 'Instagram', value: 22, color: '#E4405F' },
    { name: 'Facebook', value: 15, color: '#1877F2' }
  ];

  const performanceData = [
    { name: 'Week 1', success: 85, pending: 10, failed: 5 },
    { name: 'Week 2', success: 90, pending: 7, failed: 3 },
    { name: 'Week 3', success: 88, pending: 8, failed: 4 },
    { name: 'Week 4', success: 92, pending: 5, failed: 3 }
  ];

  const hourlyData = [
    { hour: '00:00', activity: 5 },
    { hour: '04:00', activity: 3 },
    { hour: '08:00', activity: 45 },
    { hour: '12:00', activity: 78 },
    { hour: '16:00', activity: 95 },
    { hour: '20:00', activity: 62 },
    { hour: '24:00', activity: 18 }
  ];

  const engagementData = [
    { platform: 'YouTube', views: 125000, likes: 8500, comments: 1200, shares: 450 },
    { platform: 'TikTok', views: 98000, likes: 12000, comments: 850, shares: 320 },
    { platform: 'Instagram', views: 75000, likes: 6500, comments: 420, shares: 280 },
    { platform: 'Facebook', views: 45000, likes: 3200, comments: 180, shares: 95 }
  ];

  const topContent = [
    { id: 1, title: 'How to Build Better Habits', platform: 'YouTube', views: 125000, engagement: 94.2, status: 'trending' },
    { id: 2, title: '5 Productivity Tips', platform: 'TikTok', views: 98000, engagement: 91.5, status: 'viral' },
    { id: 3, title: 'Morning Routine Guide', platform: 'Instagram', views: 75000, engagement: 88.7, status: 'popular' },
    { id: 4, title: 'Work-Life Balance', platform: 'Facebook', views: 45000, engagement: 85.3, status: 'growing' }
  ];

  const recentActivity = [
    { id: 1, type: 'transcript', title: 'Video transcript completed', time: '2 mins ago', status: 'success', details: '45 min video processed' },
    { id: 2, type: 'story', title: 'Story generated successfully', time: '15 mins ago', status: 'success', details: 'Posted to Instagram' },
    { id: 3, type: 'video', title: 'Video trimmed and uploaded', time: '1 hour ago', status: 'success', details: '3 clips created' },
    { id: 4, type: 'post', title: 'Post scheduled for tomorrow', time: '2 hours ago', status: 'pending', details: '10:00 AM - YouTube' },
    { id: 5, type: 'transcript', title: 'New transcript started', time: '3 hours ago', status: 'processing', details: 'Processing... 60%' },
    { id: 6, type: 'story', title: 'Story analytics updated', time: '4 hours ago', status: 'success', details: '1.2K views, 89 likes' },
    { id: 7, type: 'video', title: 'Video optimization complete', time: '5 hours ago', status: 'success', details: 'File size reduced 40%' },
    { id: 8, type: 'post', title: 'Bulk posts scheduled', time: '6 hours ago', status: 'success', details: '15 posts scheduled' }
  ];

  const analyticsMetrics = [
    { label: 'Total Views', value: '343,000', change: '+18.5%', icon: FiEye, color: 'blue' },
    { label: 'Total Engagement', value: '28,450', change: '+12.3%', icon: FiHeart, color: 'red' },
    { label: 'Avg. Watch Time', value: '4:32', change: '+5.2%', icon: FiClock, color: 'purple' },
    { label: 'Conversion Rate', value: '8.7%', change: '+2.1%', icon: FiTarget, color: 'green' }
  ];

  const growthData = [
    { period: 'Q1', followers: 12000, engagement: 8500, revenue: 4500 },
    { period: 'Q2', followers: 18500, engagement: 12400, revenue: 7200 },
    { period: 'Q3', followers: 24500, engagement: 16800, revenue: 9800 },
    { period: 'Q4', followers: 32000, engagement: 22400, revenue: 12500 }
  ];

  const stats = [
    { 
      title: 'Total Transcripts', 
      value: '1,247', 
      change: '+12.5%', 
      icon: FiFileText, 
      color: 'blue',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    { 
      title: 'Stories Generated', 
      value: '892', 
      change: '+8.3%', 
      icon: FiZap, 
      color: 'purple',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    { 
      title: 'Videos Trimmed', 
      value: '534', 
      change: '+15.2%', 
      icon: FiScissors, 
      color: 'green',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    { 
      title: 'Posts Scheduled', 
      value: '2,156', 
      change: '+22.1%', 
      icon: FiCalendar, 
      color: 'orange',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const insights = [
    { title: 'Peak Activity Time', value: '2:00 PM - 4:00 PM', icon: FiClock, color: 'text-blue-600' },
    { title: 'Best Performing Platform', value: 'YouTube (35%)', icon: FiTrendingUp, color: 'text-red-600' },
    { title: 'Success Rate', value: '94.2%', icon: FiCheckCircle, color: 'text-green-600' },
    { title: 'Active Users', value: '1,234', icon: FiUsers, color: 'text-purple-600' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'transcript': return FiFileText;
      case 'story': return FiZap;
      case 'video': return FiScissors;
      case 'post': return FiCalendar;
      default: return FiActivity;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0 pb-4 sm:pb-6 lg:pb-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.iconColor}`} />
                </div>
                <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                  <FiTrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-600">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">{stat.title}</p>
              <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: '75%',
                    background: stat.color === 'blue' ? 'linear-gradient(to right, #60a5fa, #2563eb)' :
                               stat.color === 'purple' ? 'linear-gradient(to right, #a78bfa, #7c3aed)' :
                               stat.color === 'green' ? 'linear-gradient(to right, #4ade80, #16a34a)' :
                               'linear-gradient(to right, #fb923c, #ea580c)'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {/* Weekly Activity Line Chart */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiBarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Weekly Activity</h3>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height={windowWidth < 640 ? 200 : windowWidth < 1024 ? 250 : 280}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <YAxis stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="transcripts" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="stories" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="videos" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="posts" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Distribution Pie Chart */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiPieChart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Platform Distribution</h3>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={windowWidth < 640 ? 200 : windowWidth < 1024 ? 250 : 280}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => windowWidth < 640 ? `${(percent * 100).toFixed(0)}%` : `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={windowWidth < 640 ? 60 : windowWidth < 1024 ? 70 : 80}
                fill="#8884d8"
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Performance & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {/* Monthly Performance Area Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Monthly Performance</h3>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">6 months</span>
          </div>
          <ResponsiveContainer width="100%" height={windowWidth < 640 ? 220 : windowWidth < 1024 ? 280 : 320}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <YAxis stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" />
              <Area type="monotone" dataKey="target" stroke="#10b981" fillOpacity={1} fill="url(#colorTarget)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl shadow-md border border-blue-100 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <FiEye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Key Insights</h3>
          </div>
          <div className="space-y-3">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${insight.color}`} />
                    <p className="text-xs text-gray-600 font-medium">{insight.title}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{insight.value}</p>
            </div>
              );
            })}
          </div>
        </div>
        </div>

      {/* Performance Metrics & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {/* Performance Metrics Bar Chart */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiActivity className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Performance Metrics</h3>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">4 weeks</span>
          </div>
          <ResponsiveContainer width="100%" height={windowWidth < 640 ? 220 : windowWidth < 1024 ? 280 : 320}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <YAxis stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }} 
              />
              <Legend />
              <Bar dataKey="success" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pending" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Bar dataKey="failed" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Statistics */}
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-lg sm:rounded-xl shadow-md border border-indigo-100 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <FiBarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Performance Summary</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-indigo-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Overall Success Rate</span>
                <span className="text-sm font-bold text-green-600">94.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '94.2%' }}></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-indigo-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Average Processing Time</span>
                <span className="text-sm font-bold text-blue-600">2.4 min</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-indigo-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Content Quality Score</span>
                <span className="text-sm font-bold text-purple-600">8.7/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-indigo-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">User Satisfaction</span>
                <span className="text-sm font-bold text-orange-600">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Performance Details */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 mb-4 sm:mb-6 lg:mb-8">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <FiGlobe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Platform Performance Breakdown</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {engagementData.map((platform, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 sm:p-4 border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">{platform.platform}</h4>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: platformData.find(p => p.name === platform.platform)?.color + '20' }}>
                  <FiTrendingUp className="w-4 h-4" style={{ color: platformData.find(p => p.name === platform.platform)?.color }} />
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    <FiEye className="w-3 h-3 flex-shrink-0" /> <span className="hidden sm:inline">Views</span>
                  </span>
                  <span className="text-xs font-semibold text-gray-900">{(platform.views / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    <FiThumbsUp className="w-3 h-3 flex-shrink-0" /> <span className="hidden sm:inline">Likes</span>
                  </span>
                  <span className="text-xs font-semibold text-gray-900">{(platform.likes / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    <FiMessageSquare className="w-3 h-3 flex-shrink-0" /> <span className="hidden sm:inline">Comments</span>
                  </span>
                  <span className="text-xs font-semibold text-gray-900">{platform.comments}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    <FiShare2 className="w-3 h-3 flex-shrink-0" /> <span className="hidden sm:inline">Shares</span>
                  </span>
                  <span className="text-xs font-semibold text-gray-900">{platform.shares}</span>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Engagement</span>
                  <span className="text-xs font-bold text-green-600">
                    {((platform.likes + platform.comments + platform.shares) / platform.views * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <FiDownload className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded">+15%</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-1">2.4M</h3>
          <p className="text-sm text-blue-100">Total Downloads</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <FiUpload className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded">+22%</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-1">1.8M</h3>
          <p className="text-sm text-purple-100">Total Uploads</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <FiRefreshCw className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded">+8%</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-1">98.5%</h3>
          <p className="text-sm text-green-100">Uptime</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <FiDollarSign className="w-8 h-8 opacity-80" />
            <span className="text-xs bg-white/20 px-2 py-1 rounded">+31%</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-1">$34.2K</h3>
          <p className="text-sm text-orange-100">Revenue</p>
        </div>
      </div>

      {/* Analytics Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {analyticsMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            red: 'bg-red-100 text-red-600',
            purple: 'bg-purple-100 text-purple-600',
            green: 'bg-green-100 text-green-600'
          };
          return (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 ${colorClasses[metric.color]} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">{metric.change}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">{metric.label}</p>
            </div>
          );
        })}
      </div>

      {/* Hourly Activity & Engagement Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {/* Hourly Activity Chart */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Hourly Activity Pattern</h3>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">24 hours</span>
          </div>
          <ResponsiveContainer width="100%" height={windowWidth < 640 ? 200 : windowWidth < 1024 ? 250 : 300}>
            <AreaChart data={hourlyData}>
              <defs>
                <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" stroke="#6b7280" fontSize={windowWidth < 640 ? 9 : 11} />
              <YAxis stroke="#6b7280" fontSize={windowWidth < 640 ? 9 : 11} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }} 
              />
              <Area type="monotone" dataKey="activity" stroke="#6366f1" fillOpacity={1} fill="url(#colorActivity)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Platform Engagement</h3>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={windowWidth < 640 ? 200 : windowWidth < 1024 ? 250 : 300}>
            <BarChart data={engagementData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#6b7280" fontSize={windowWidth < 640 ? 9 : 11} />
              <YAxis dataKey="platform" type="category" stroke="#6b7280" fontSize={windowWidth < 640 ? 9 : 11} width={windowWidth < 640 ? 60 : 80} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }} 
              />
              <Legend />
              <Bar dataKey="views" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              <Bar dataKey="likes" fill="#10b981" radius={[0, 4, 4, 0]} />
              <Bar dataKey="comments" fill="#f59e0b" radius={[0, 4, 4, 0]} />
              <Bar dataKey="shares" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </div>

      {/* Growth Trends & Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
        {/* Growth Trends */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Quarterly Growth Trends</h3>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2024</span>
          </div>
          <ResponsiveContainer width="100%" height={windowWidth < 640 ? 220 : windowWidth < 1024 ? 280 : 320}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="period" stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <YAxis yAxisId="left" stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" fontSize={windowWidth < 640 ? 10 : 12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }} 
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="followers" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
              <Line yAxisId="left" type="monotone" dataKey="engagement" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performing Content */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <FiAward className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Top Performing Content</h3>
            </div>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {topContent.map((content) => (
              <div key={content.id} className="p-2.5 sm:p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 truncate">{content.title}</h4>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <span className="text-xs text-gray-600">{content.platform}</span>
                      <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-medium ${
                        content.status === 'trending' ? 'bg-red-100 text-red-800' :
                        content.status === 'viral' ? 'bg-purple-100 text-purple-800' :
                        content.status === 'popular' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {content.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-xs">
                  <div>
                    <p className="text-gray-500 text-xs">Views</p>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm">{content.views.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Engagement</p>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm">{content.engagement}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Status</p>
                    <p className="font-semibold text-green-600 text-xs sm:text-sm">Active</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Recent Activity */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 mb-4 sm:mb-6 lg:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <FiActivity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Recent Activity Timeline</h3>
          </div>
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All Activity</button>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity) => {
            const Icon = getTypeIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
                  activity.status === 'success' ? 'bg-green-100' :
                  activity.status === 'pending' ? 'bg-yellow-100' :
                  'bg-blue-100'
                }`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    activity.status === 'success' ? 'text-green-600' :
                    activity.status === 'pending' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900">{activity.title}</p>
                    <span className={`text-xs px-2 py-0.5 sm:py-1 rounded-full font-medium flex-shrink-0 w-fit ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1 sm:mb-2">{activity.details}</p>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FiClock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

