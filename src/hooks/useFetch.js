import {useState, useEffect } from 'react'

/**
 * 
 * Customs are just functions in hooks format...
 * they tend to return specific data..works like  a normal function...
 */
function useFetch(url, options) {

    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(null) 
    const [data, setData] = useState(null) 

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(url, options) 
                const data = await response.json()

                setData(data) 
                setLoading(false) 
            }catch(error) {
               setError(error) 
               setLoading(false)  
            }
        }
    
        fetchData() //avoid warning from the terminal about dependencies by add the code below...
        //eslint-disable-next-line
    }, [])

    return { data, loading, error }
}

export default useFetch