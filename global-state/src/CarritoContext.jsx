import { createContext, useState } from "react";

const CarritoContext = createContext()

export function CarritoProvider({children}){
    const [items, setItems] = useState([])

    //agregar producto: si ya esta suma1 a la cantidad, sino lo agrega nuevo

    //quitar un producto del carrito

    //vaciar todo el carrito


    return(
        <CarritoContext.Provider>
            {children}
        </CarritoContext.Provider>
    )
}