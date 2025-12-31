import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
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
    <ErrorBoundary>
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
            {/* Catch all route - redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            limit={3}
            className="toast-container"
            toastClassName="toast-message"
            bodyClassName="toast-body"
          />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

