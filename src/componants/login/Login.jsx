import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please fill in both fields.');
    } else {
      setError('');
      // Add your login logic here
      alert('Login successful!');
      // Clear form after successful submission
      setUsername('');
      setPassword('');
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-[#e6e6e6] flex items-center justify-center p-4">
      <div className="bg-[#d0e0e0] shadow-lg rounded-2xl w-full max-w-md p-6 space-y-6 border border-blue-100">
        <div className="flex items-center space-x-3 mb-4">
          <User className="text-[#2e4156]" size={32} />
          <h2 className="text-2xl font-bold text-[#2e4156]">Login</h2>
        </div>

        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="text-[#2e4156]">Email</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              className="
                w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4156]
                focus:border-transparent transition-all duration-300 text-gray-700 bg-transparent placeholder-black
              "
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="text-[#2e4156]">Password</label>
            <div className='relative'>
            <input
              type={passwordVisible ? 'text' : 'password'} // Toggle input type based on passwordVisible state
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="
                w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4156]
                focus:border-transparent transition-all duration-300 text-gray-700 bg-transparent placeholder-black
              "
            />
            {/* Toggle password visibility icon */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2e4156] "
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            </div>
          </div>

          <button
            type="submit"
            className="
              w-full bg-[#2e4156] text-white py-3 rounded-lg flex items-center justify-center space-x-2
              hover:bg-[#253342] transition-colors duration-300 shadow-md hover:shadow-lg
            "
          >
            <Lock size={20} />
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
