'use client'

import React,{ createContext, useContext } from 'react'

export const TestContext = createContext("light")

export const TestProvider = ({ theme,children }: { theme:string,children: React.ReactNode }) => {
    return (
        <TestContext.Provider value={theme}>
            {children}
        </TestContext.Provider>
    )
}

export function useTestContext() {
    const ctx = useContext(TestContext);
    if (!ctx) {
        throw new Error(
            "@test/test: TestProvider was not found in component tree, make sure you have it in your app"
        );
    }
    return ctx;
}