
export const getHeroByName = async ( name = '', data ) => {

  console.log( name, data )

  name = name.toLowerCase().trim();
  
  if ( name.length === 0 ) return [];

  return await data.filter(
    hero => hero.name.toLowerCase().includes( name )
  );
}
