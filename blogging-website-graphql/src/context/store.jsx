import React, {useContext, useState} from 'react'

export const Store = React.createContext();

export const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);

    const value = {loading, setLoading}
    return(
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    )
}


export const useMyContext = () => useContext(Store);