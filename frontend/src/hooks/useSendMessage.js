import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
import { useState } from "react";

const sendMessage = () => {
    const [loading, setLoading] = useState(false); // Initial loading state set to false
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        try {
            setLoading(true); // Set loading state to true before making API call

            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error); // Throw error if there's an error in response
            }

            // Update messages state with new message data
            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message); // Display toast message with error
        } finally {
            setLoading(false); // Set loading state to false after API call completes
        }
    };

    return { sendMessage, loading }; // Return sendMessage function and loading state
};

export default sendMessage;
