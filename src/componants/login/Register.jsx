import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);
    alert('Registration successful!');

    // Clear form after successful submission
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="min-h-screen bg-[#e6e6e6] flex items-center justify-center p-4">
      <div className="bg-[#d0e0e0] shadow-lg rounded-2xl w-full max-w-md p-6 space-y-6 border border-blue-100">
        <div className="flex items-center space-x-3 mb-4">
          <User className="text-[#2e4156]" size={32} />
          <h2 className="text-2xl font-bold text-[#2e4156]">Register</h2>
        </div>

        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
        {success && <div className="text-green-600 text-sm mb-4">Registration successful!</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-[#2e4156]">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4156] focus:border-transparent transition-all duration-300 text-gray-700 bg-transparent placeholder-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-[#2e4156]">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4156] focus:border-transparent transition-all duration-300 text-gray-700 bg-transparent placeholder-black"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="text-[#2e4156]">Password</label>
            <div className='relative'>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4156] focus:border-transparent transition-all duration-300 text-gray-700 bg-transparent placeholder-black"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2e4156]"
              >
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="text-[#2e4156]">Confirm Password</label>
            <div className='relative'>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4156] focus:border-transparent transition-all duration-300 text-gray-700 bg-transparent placeholder-black"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2e4156]"
              >
                {confirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2e4156] text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#253342] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <Lock size={20} />
            <span>Register</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
