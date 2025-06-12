import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // ✅ FIXED
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

const GoogleLoginButton = () => {
  const { login } = useAuth();
  const navigate = useNavigate();


  const handleSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode(credentialResponse.credential);
      login(decoded); // your custom login function in context
       navigate("/courses");
    }
    

  };

  return (
    <div className="flex justify-center">
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />
    </div>
  );
};

export default GoogleLoginButton;
