import { useEffect, useState } from "react"


function useFetch<T>(url:string){
    const [data, setData] = useState<T | null>(null)
    const [loading,setLoading] = useState<boolean>(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(()=>{
        async function load(){
            try {
                setLoading(true)
                setError(null)
                const res = await fetch(url)
                if(!res.ok) throw new Error(`HTTP ${res.status}`)
                setData(await res.json())
            } catch (error) {
                setError(error instanceof Error ? error.message : "Error desconocido")
            }finally{
                setLoading(false)
            }
        }
        load()
    },[url])
 
    return { data, loading, error }

}

export default useFetch