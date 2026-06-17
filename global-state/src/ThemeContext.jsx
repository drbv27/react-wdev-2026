import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const[tema,setTema] = useState('oscuro')

    function alternarTema(){
        setTema(tema==="oscuro" ? "claro" : "oscuro")
    }

    return(
        <ThemeContext.Provider value={{tema,alternarTema}}>
            {children}
        </ThemeContext.Provider>
    )
}