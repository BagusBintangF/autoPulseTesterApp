import React, { useEffect, useState, createContext, useContext } from 'react'

const GlobalContext = createContext();

// Provider untuk state
export const GlobalProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [useDirection, setUseDirection] = useState(null)

  return (
    <GlobalContext.Provider value={{ selectedValue, setSelectedValue, useDirection, setUseDirection }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};