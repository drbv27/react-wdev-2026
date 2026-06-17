import { createContext, useState } from "react";

const CarritoContext = createContext()

export function CarritoProvider({children}){
    const [items, setItems] = useState([])

    //agregar producto: si ya esta suma1 a la cantidad, sino lo agrega nuevo
    function agregar(producto){
        setItems((prev)=>{
            const existe = prev.find((item)=> item.id === producto.id)
            if(existe){
                return prev.map((item)=> 
                    item.id===producto.id ?{ ...item,cantidad:item.cantidad+1 }:item
                )
            }
            return[...prev,{...producto, cantidad:1}]
        })
    }
    //quitar un producto del carrito
    function quitar(id){
        setItems((prev)=>prev.filter((item)=> item.id !== id))
    }

    //vaciar todo el carrito
    function vaciar(){
        setItems([])
    }

    const cantidadTotal = items.reduce((acc,item)=> acc+item.cantidad,0)
    const precioTotal = items.reduce((acc,item)=> acc+item.precio*item.cantidad,0)

    return(
        <CarritoContext.Provider value={{items,vaciar,agregar,quitar,cantidadTotal,precioTotal}}>
            {children}
        </CarritoContext.Provider>
    )
}