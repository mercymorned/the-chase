'use client';

import { createContext, useContext, useState } from "react";

const BarContext = createContext(undefined);

export function BarWrapper({children}) {

    return (
        <BarContext.Provider value={{id}}>
            {children}
        </BarContext.Provider>
    )
}

export default function useBarContext() {
    return useContext(BarContext);
}