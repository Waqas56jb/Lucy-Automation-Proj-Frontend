import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/pages/Dashboard';
import Transcript from './components/pages/Transcript';
import StoryGenerate from './components/pages/StoryGenerate';
import VideoTrim from './components/pages/VideoTrim';
import SchedulePost from './components/pages/SchedulePost';
import Settings from './components/pages/Settings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="transcript" element={<Transcript />} />
            <Route path="story-generate" element={<StoryGenerate />} />
            <Route path="video-trim" element={<VideoTrim />} />
            <Route path="schedule-post" element={<SchedulePost />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Redirects */}
          <Route path="/home" element={<Navigate to="/dashboard" replace />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </AuthProvider>
  );
}

export default App;

