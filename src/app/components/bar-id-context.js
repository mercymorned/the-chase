'use client';

import { createContext, useContext, useState } from "react";
import barID from './../page.js'

const BarContext = createContext();

export function BarWrapper({children}) {
    const [barNumber, setBarNumber] = useState(barID)

    return (
        <BarContext.Provider value={{
            barNumber, 
            setBarNumber
            }}>
            {children}
        </BarContext.Provider>
    )
}

export default function useBarContext() {
    return useContext(BarContext);
}