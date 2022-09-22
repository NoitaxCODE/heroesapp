import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroByName } from '../helpers';
import { useState, useEffect } from 'react';

export const SearchPage = () => {

  // Con el navigate viajo hacia la ruta que yo quiero
  const navigate = useNavigate();
  // Con el location obtengo todos los parametros juntos de la URL
  const location = useLocation();
  // Con query-string separo los parametros que vienen todos juntos en 
  // el locarion. Para utilizarlo debemos instalar un pequeño paquete 
  // con yarn add query-string
  // queryString me devuelve un objeto dentro del cual estan los parametros
  // separados
  const { q = ''} = queryString.parse( location.search )

  const [heroes, setHeroes] = useState([])

  
  
  const showSearch = ( q.length === 0 );
  const showError  = ( q.length > 0 ) && heroes.length === 0 ;
  
  
  
  const { searchText, onInputChange} = useForm({
    searchText: q
  });
  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    
    navigate(`?q=${ searchText.toLowerCase().trim() }`)
    
    
    console.log({ searchText })
  }
  
  useEffect(() => {
    
    const getArrayHeroes = async ()=>{

      setHeroes( await getHeroByName( q ))

    }
  
    getArrayHeroes()
    
  }, [ q ])


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
            type="text" 
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
          <button className="btn btn-outline-primary mt-1">
            Search
          </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* Opcion uno */}
          {/* {
            ( q.length === 0 ) 
            ? <div className="alert alert-primary">Search a hero</div>
            : ( heroes.length === 0 )
              && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
          } */}

          {/* Opcion dos (mas prolija) */}

          <div className="alert alert-primary animate__animated animate__fadeIn" 
              style={{ display: showSearch ? '' : 'none'}}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
              style={{ display: showError ? '' : 'none'}}>
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero }/>
            ))

          }

        </div>
      </div>
    </>
  )
}
