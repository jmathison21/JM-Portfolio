"use client"

import { PropsWithChildren, createContext, useState } from "react";

export type Theme = "light" | "dark" | "system"

export type ThemeContextType = [
    theme: Theme,
    setTheme: (theme: Theme) => void
]

export const ThemeContext = createContext<ThemeContextType>(["system", () => {}])

export default function ThemeProvider({children}: PropsWithChildren) {
    const state = useState<Theme>("system")

    return (<ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>)
}