import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!message.trim()) return; // Do not send empty messages

    await sendMessage(message); // Call sendMessage hook function
    setMessage(''); // Clear input field after sending message
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;



// STATER CODE FOR THIS FILE
// import React from 'react';
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className="w-full">
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send a message' />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'></button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput



// STATER CODE FOR THIS FILE
// import React from 'react';
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className="w-full">
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send a message' />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'></button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput