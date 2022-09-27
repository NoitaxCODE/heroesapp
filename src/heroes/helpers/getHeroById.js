
export const getHeroById = async ( id, data ) => {

  return await data.find( hero => hero.id === parseInt(id) );

}
