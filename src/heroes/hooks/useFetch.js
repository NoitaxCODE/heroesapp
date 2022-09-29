import { useEffect } from "react"
import { useState } from "react"

export const useFetch = ( url ) => {

  const [ state, setState ] = useState({ data: [] })

  const getArrayHeros = async ()=>{

    const res = await fetch( url )
    const data = await res.json()

    setState({ data })
  }

  useEffect( ()=>{

    getArrayHeros() 

  }, [])
  
  return {
    data: state.data
  }
}
