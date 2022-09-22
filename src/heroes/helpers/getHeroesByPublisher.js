import { heroes } from "../data/heroes";

export const getHeroesByPublisher = async ( publisher )=>{

  const heroArray = await heroes()

  const validPublishers = ['DC Comics','Marvel Comics']

  if ( !validPublishers.includes( publisher ) ){
    throw new Error(`${ publisher } in not a valid publisher`)
  }

  // return heroes.filter( heroe=> heroe.publisher === publisher )
  return heroArray.filter( heroe=> heroe.biography.publisher === publisher )

}