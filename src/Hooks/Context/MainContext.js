import React, { createContext, useState } from 'react'

const MainContext = createContext();

const ProviderContext = ({ children }) => {
    const [side_show, setSide_show] = useState(false);

    const Values= {side_show, setSide_show };
  return (
    <MainContext.Provider value={Values}>
        { children }
    </MainContext.Provider>
  )
}

export { ProviderContext, MainContext }