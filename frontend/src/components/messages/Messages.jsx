import React, { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (messages && messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages]);

  if (loading) {
    return (
      <div className='px-4 flex-1 overflow-auto'>
        {[...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      </div>
    );
  }

  if (!messages || messages.length === 0) {
    return (
      <div className='px-4 flex-1 overflow-auto'>
        <p className='text-center text-white'>Send a message to start the conversation</p>
      </div>
    );
  }

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {messages.map((message) => (
        <div key={message._id}>
          <Message message={message} />
          <div ref={lastMessageRef}></div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
