import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Features from './pages/Features';
import Explore from './pages/Explore';
import SignUp from './components/Signup';
import Login from './components/Login';
import ForgetPass from './components/ForgetPass';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === '/dashboard';
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/forgot-password';

  useEffect(() => {
    // Check if the page was reloaded
    const isReload = window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD;
    
    // If it's a reload and not on the home page, redirect to home
    if (isReload && location.pathname !== '/') {
      navigate('/');
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app">
      {!isAuthPage && !isDashboard && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPass />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      {!isAuthPage && !isDashboard && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 