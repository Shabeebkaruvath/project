import React from 'react';
import '../css/Feedback.css'

function Feedback() {
 

  return (
    <div className='feedback'>
      <h2>Feedback </h2>
      <form >
       <textarea type="text" placeholder="Please share your feedback here..." rows={4} cols={100}/>
       <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;