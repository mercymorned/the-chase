'use client';

import { createContext, useContext, useRef } from "react";

const BarContext = createContext(undefined);

export function BarWrapper({children}) {
    const barID = useRef(null);

    return (
        <BarContext.Provider value={{barID}}>
            {children}
        </BarContext.Provider>
    )
}

export default function useBarContext() {
    return useContext(BarContext);
}