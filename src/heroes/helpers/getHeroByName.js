import { heroes } from "../data/heroes";

export const getHeroByName = async ( name = '' ) => {

  name = name.toLowerCase().trim();
  
  if ( name.length === 0 ) return [];

  const heroesArray = await heroes()

  return await heroesArray.filter(
    hero => hero.name.toLowerCase().includes( name )
  );
}
