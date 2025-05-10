import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/GoogleSignIn.css';

const GoogleSignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load the Google Sign-In script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Define the callback function globally
    window.handleCredentialResponse = async (response) => {
      try {
        // Send the token to your backend
        const result = await axios.post('http://localhost:5000/api/auth/google', {
          token: response.credential
        });

        // Store the token and user data
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        sessionStorage.setItem('showBurst', 'true');
        
        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Google sign-in error:', error);
      }
    };

    return () => {
      document.body.removeChild(script);
      delete window.handleCredentialResponse;
    };
  }, [navigate]);

  return (
    <div className="google-signin-container">
      <div
        id="g_id_onload"
        data-client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      />
    </div>
  );
};

export default GoogleSignIn; 