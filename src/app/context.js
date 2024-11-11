'use client';

import { createContext, useContext, useState } from "react";

const BoardContext = createContext();

export function BoardWrapper({children}) {
    let [state, setState] = useState('Hewwo');

    return (
        <BoardContext.Provider value={state}>
            {children}
        </BoardContext.Provider>
    )
}

export function useBoardContext() {
    return useContext(BoardContext);
}