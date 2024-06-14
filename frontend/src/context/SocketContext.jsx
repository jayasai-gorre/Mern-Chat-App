    import { useState, useEffect, useContext } from "react";
    import { useAuthContext } from "../context/AuthContext";
    import { createContext } from "react";
    import io from "socket.io-client";

    export const SocketContext = createContext();

    export const useSocketContext = () => {
        return useContext(SocketContext);
    }

    export const SocketContextProvider = ({ children }) => {
        const [socket, setSocket] = useState(null);
        const [onlineUsers, setOnlineUsers] = useState([]);
        const { authUser } = useAuthContext();

        useEffect(() => {
            if (authUser) {
                const socket = io("http://localhost:8080", {
                    query: {
                        userId: authUser._id
                    }
                });

                setSocket(socket);

                // io.emit() is used to send events to all the connected clients
                socket.on("getOnlineUsers", (users) => {
                    setOnlineUsers(users);
                })

                socket.on("connect", () => {
                    console.log("Socket connected");
                });

                socket.on("disconnect", () => {
                    console.log("Socket disconnected");
                });

                return () => {
                    socket.close();
                    console.log("Socket disconnected on unmount");
                };
            } else {
                if (socket) {
                    socket.close();
                    setSocket(null);
                }
            }
        }, [authUser]); // Reconnect or disconnect socket when authUser changes

        return (
            <SocketContext.Provider value={{ socket, onlineUsers }}>
                {children}
            </SocketContext.Provider>
        );
    };
