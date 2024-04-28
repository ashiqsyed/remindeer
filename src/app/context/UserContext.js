"use client"
import { createContext, useState, useEffect} from 'react';

const UserContext = createContext();

export const UserProvider = ( {children } ) => {
    const [userData, setUserData] = useState( {
        token: undefined,
        user: undefined,
    });

    useEffect( () => {
        //this will check for a token within local storage
        const token = localStorage.getItem('auth-token');
        if (token) {
            console.log("check")
            setUserData( prev => ( {
                ...prev,
                token: token,
            }));
        }
    }, []);

    return (
        <UserContext.Provider value= {{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;