import { useEffect, useState } from "react"


function useFetch(url){
    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        async function load(){
            try {
                setLoading(true)
                setError(null)
                const res = await fetch(url)
                if(!res.ok) throw new Error(`HTTP ${res.status}`)
                setData(await res.json())
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        load()
    },[url])
 
    return { data, loading, error }

}

export default useFetch