import { useState } from "react"
import { useEffect } from "react"
import { useFetch } from "../hooks"
import { HeroesContext } from "./HeroesContext"


export const HeroesProvider = ({ children }) => {

  const [ arrayHeroe, setArrayHeroe ] = useState({ data: [] })
  const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
  const { data } = useFetch( url )

  useEffect( ()=>{
    setArrayHeroe({ data: data })

  },[ data ])

  return (
    <HeroesContext.Provider
      value={  arrayHeroe  }
    >
      { children }
    </HeroesContext.Provider>
  )
}
