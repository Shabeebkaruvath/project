import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      console.log('Feedback submitted:', feedback);
      // Add your feedback submission logic here
      alert('Thank you for your feedback!');
      setFeedback('');
    } else {
      alert('Please write your feedback before submitting.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="
        bg-white 
        shadow-lg 
        rounded-2xl 
        w-full 
        max-w-md 
        p-6 
        space-y-6 
        border 
        border-blue-100
      ">
        <div className="flex items-center space-x-3 mb-4">
          <MessageCircle className="text-blue-500" size={32} />
          <h2 className="text-2xl font-bold text-blue-800">
            Share Your Feedback
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please share your feedback here..."
            className="
              w-full 
              p-4 
              border-2 
              border-blue-200 
              rounded-lg 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-300 
              focus:border-transparent 
              transition-all 
              duration-300 
              resize-y 
              min-h-[150px]
              text-gray-700
            "
          />

          <button 
            type="submit" 
            className="
              w-full 
              bg-blue-500 
              text-white 
              py-3 
              rounded-lg 
              flex 
              items-center 
              justify-center 
              space-x-2 
              hover:bg-blue-600 
              transition-colors 
              duration-300 
              shadow-md 
              hover:shadow-lg
            "
          >
            <Send size={20} />
            <span>Submit Feedback</span>
          </button>
        </form>

         
      </div>
    </div>
  );
}

export default Feedback;