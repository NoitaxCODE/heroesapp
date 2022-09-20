import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters})=>{

  // if (alter_ego === characters ) return (<></>)
  // return <p>{ characters }</p>;

  return (alter_ego === characters )
    ? <></>
    : <p>{ characters }</p>;
}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  // const charactersByHero = <p>{ characters }</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img src={ heroImageUrl } className="card-img" alt={ superhero } />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">{ alter_ego }</p>
              
              {/* {
                Para evitar que el alter ego se repita en el caso de que solo halla un actor, podemos hacerlo
                de cualquiera de estas maneras
                ( alter_ego !== characters ) && CharactersByHero
                ( alter_ego !== characters ) && <p>{ characters }</p>
              } */}
              <CharactersByHero characters={ characters} alter_ego={ alter_ego }/>

              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>

              <Link to={`/hero/${ id }`}>
                Mas...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
