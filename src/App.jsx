import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Layout from './layouts/Layout';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Student Pages
import StudentEvents from './pages/student/Events';
import EventDetails from './pages/student/EventDetails';
import MyRegistrations from './pages/student/MyRegistrations';
import QRCode from './pages/student/QRCode';
import Notifications from './pages/student/Notifications';

// Organizer Pages
import OrganizerDashboard from './pages/organizer/Dashboard';
import OrganizerEvents from './pages/organizer/Events';
import CreateEvent from './pages/organizer/CreateEvent';
import OrganizerEventDetails from './pages/organizer/EventDetails';
import OrganizerAttendance from './pages/organizer/Attendance';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import PendingApprovals from './pages/admin/PendingApprovals';
import AllEvents from './pages/admin/AllEvents';
import Reports from './pages/admin/Reports';
import Clubs from './pages/admin/Clubs';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<Navigate to="/student" replace />} />
          
          {/* Student Routes */}
          <Route 
            path="/student/*" 
            element={
              <ProtectedRoute roles={['student']}>
                <Layout>
                  <Routes>
                    <Route index element={<Navigate to="events" />} />
                    <Route path="events" element={<StudentEvents />} />
                    <Route path="events/:id" element={<EventDetails />} />
                    <Route path="my-registrations" element={<MyRegistrations />} />
                    <Route path="qr/:eventId" element={<QRCode />} />
                    <Route path="notifications" element={<Notifications />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } 
          />

          {/* Organizer Routes */}
          <Route 
            path="/organizer/*" 
            element={
              <ProtectedRoute roles={['organizer']}>
                <Layout>
                  <Routes>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<OrganizerDashboard />} />
                    <Route path="events" element={<OrganizerEvents />} />
                    <Route path="events/create" element={<CreateEvent />} />
                    <Route path="events/:id" element={<OrganizerEventDetails />} />
                    <Route path="attendance/:id" element={<OrganizerAttendance />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute roles={['admin']}>
                <Layout>
                  <Routes>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="pending-approvals" element={<PendingApprovals />} />
                    <Route path="events" element={<AllEvents />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="clubs" element={<Clubs />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            } 
          />

          {/* 404 and Unauthorized */}
          <Route 
            path="/unauthorized" 
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">Unauthorized</h1>
                  <p className="text-gray-600 mt-2">You don't have permission to access this page.</p>
                </div>
              </div>
            } 
          />
          
          <Route 
            path="*" 
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">404 - Page Not Found</h1>
                  <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
                </div>
              </div>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;