import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
const defaultValue = {
    currentUser : null,
    setCurrentUser : () => null
}
export const UserContext = createContext(defaultValue)

export const UserContextPrvoider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        onAuthStateChangedListner((user) => {
            setCurrentUser(user)
        })
    },[])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}