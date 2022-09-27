
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers'
import { useContext, useEffect, useState } from 'react';
import { HeroesContext } from '../context/HeroesContext';

export const HeroList = ({ publisher }) => {

  // const heroes = useMemo( ()=> getHeroesByPublisher( publisher ), [ publisher ]) 
  const [ heroes, setHeroes ] = useState([])
  const { data } = useContext( HeroesContext );
  
  useEffect(  () => {

    const heroFilter = async ()=>{
      setHeroes( await getHeroesByPublisher( publisher, data ))
    }

    heroFilter()

  }, [ publisher, data ])


  return (
    ( heroes.isLoading === false) 
    ? <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {  
          heroes.filterArray.map( hero => 

                  <HeroCard 
                    key={ hero.id }
                    { ...hero }
                  />
          )
        };
      </div>
    : <h1>IS LOADING...</h1> 
  


  )
}
