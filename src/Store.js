import React from 'react'
import { useState } from 'react'


export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    return (
        <StoreContext.Provider value={{ basket, setBasket }}>
            {children}
        </StoreContext.Provider>
    );
};