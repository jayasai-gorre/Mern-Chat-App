import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext(); // Only need setAuthUser, not authUser

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        try {
            // Validate input
            const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
            if (!success) return;

            setLoading(true);

            // Make signup request
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });

            // Parse response
            const data = await res.json();

            // Check for errors
            if (!res.ok) {
                throw new Error(data.error || "Signup failed");
            }

            // Update authentication status
            setAuthUser(data);
            localStorage.setItem("chat-user", JSON.stringify(data));

            // Display success message if needed
            toast.success("Sign up successful!");
        } catch (error) {
            // Handle errors
            toast.error(error.message || "An error occurred during sign up");
        } finally {
            // Reset loading state
            setLoading(false);
        }
    }

    return { loading, signup };
}

export default useSignup

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all the fields!");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Password do not match');
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}