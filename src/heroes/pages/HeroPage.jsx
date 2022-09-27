import { useContext } from "react";
import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroesContext } from "../context/HeroesContext";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams();
  const [ hero, setHero ] = useState();
  // El usememo lo utilizamos para no volver a cargar los datos si el componente se reenderizara. Solo se va a
  // volver a ejecutar si el id cambia

  // const hero =  useMemo( ()=> getHeroById( id ), [ id ]);

  const { data } = useContext( HeroesContext )

  useEffect( ()=>{

    const heroArray = async ()=>{
      
      setHero( await getHeroById( id , data) );

      
      if (!hero ){
        return <Navigate to="/marvel" />
      }
    }
    
    heroArray()

  },[ id ])
  

  

  const navigate = useNavigate()

  // Al hacer click se puede redireccionar hacia un lugar especifico, como se ve abajo, o podemos utilizar el
  // navigate(-1) para que vuelva hacia atras en el historial
  // const onNavigateBack = ()=>{
  //   ( hero.publisher === 'Marvel Comics' ) 
  //     ? navigate('/marvel')
  //     : navigate('/dc');
  // }

  const onNavigateBack = ()=>{
     navigate(-1);
  }



  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ hero?.images.lg }
          alt={ hero?.biography.fullName }
          className="img-thumbnail animate__animated animate__fadeInLeft"
         />
      </div>
      <div className="col-8">
        <h3>{ hero?.name }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ hero?.biography.alterEgos }</li>
          <li className="list-group-item"><b>Publisher: </b>{ hero?.biography.publisher }</li>
          <li className="list-group-item"><b>First appearance: </b>{ hero?.biography.firstAppearance }</li>
        </ul>
        <h5 className="mt-3"> Aliases</h5>
        <p>{ hero?.biography.aliases }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
      </div>


    </div>
  )
}
