import React, { useState } from 'react';
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate,Link } from "react-router-dom";

const RegisterForm = ({ setStatelogin }) => {
  const navigate = useNavigate();  // ✅ Corrected useNavigate

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // ✅ Password confirmation check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      // 1️⃣ Create authentication record
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 2️⃣ Create user document in Firestore
      const userDoc = {
        email: formData.email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: userCredential.user.uid,
        isActive: true,
        role: 'user'
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), userDoc);

      // 3️⃣ Clear form after successful registration
      setFormData({ email: '', password: '', confirmPassword: '' });

      alert('Registration successful!');
      setStatelogin(true) 
        navigate('/'); // ✅ Redirect after successful registration

    } catch (err) {
      let errorMessage = 'Registration failed. Please try again.';

      switch (err.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.';
          break;
        default:
          errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Register Account
        </h2>
  
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded">
              {error}
            </div>
          )}
  
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
  
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
  
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <button 
            type="submit" 
            disabled={isLoading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <pre>if you already have an account <Link to="/login"><span style={{color: "blue",textDecoration:"underline"}}>login</span></Link></pre>
      </div>
    </div>
  );
};

export default RegisterForm;