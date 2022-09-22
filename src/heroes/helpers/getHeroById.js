import { heroes } from "../data/heroes"

export const getHeroById = async ( id ) => {

  const heroesArray = await heroes()

  return heroesArray.find( hero => hero.id === parseInt(id) );

}
