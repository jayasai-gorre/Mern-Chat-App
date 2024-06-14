import { useState, useContext, createContext } from "react";


// This line creates a new context called AuthContext using createContext() and exports it. This context will be used to share authentication-related data across the component tree.
// createContext is used to create a Context object, which allows you to pass data through the component tree without having to pass props down manually at every level.
export const AuthContext = createContext(); // createContext(): Creates a new context.


export const useAuthContext = () => {
    return useContext(AuthContext);
}



export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-app")) || null);

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
}



// A provider component that initializes authentication state from localStorage and wraps its children with the AuthContext.Provider to pass down context values.