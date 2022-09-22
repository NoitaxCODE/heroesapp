import { Link } from "react-router-dom";

const AlterEgos = ({ alter_ego })=>{

  // if (alter_ego === characters ) return (<></>)
  // return <p>{ characters }</p>;

  return (alter_ego === 'No alter egos found.' )
    ? <></>
    : <p>Alter-ego: {alter_ego}</p>

}

export const HeroCard = ({ id, name, biography, images }) => {

  // const heroImageUrl = `./assets/heroes/${ id }.jpg`;

  // const charactersByHero = <p>{ characters }</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img src={ images.md } className="card-img" alt={ name } />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ name }</h5>
              <AlterEgos className="card-text" alter_ego={ biography.alterEgos }/>
              
              {/* {
                Para evitar que el alter ego se repita en el caso de que solo halla un actor, podemos hacerlo
                de cualquiera de estas maneras
                ( alter_ego !== characters ) && CharactersByHero
                ( alter_ego !== characters ) && <p>{ characters }</p>
              } */}
              <p>{ biography.aliases }</p>

              <p className="card-text">
                <small className="text-muted">{ biography.firstAppearance }</small>
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
