'use client';

import { createContext, useContext, useState } from "react";

const BoardContext = createContext(undefined);

export function BoardWrapper({children}) {
    let [name, setName] = useState('Ronan');

    return (
        <BoardContext.Provider value={{
            name,
            setName
        }}>
            {children}
        </BoardContext.Provider>
    )
}

export default function useBoardContext() {
    return useContext(BoardContext);
}