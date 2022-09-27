export const getHeroesByPublisher = async ( publisher, data )=>{

  const validPublishers = [ 'DC Comics','Marvel Comics' ]

  if ( !validPublishers.includes( publisher ) ){
    throw new Error(`${ publisher } in not a valid publisher`)
  }

  if ( data.length === 0) {
    return {
      isLoading: true
    }
  }

  const heros = await data

  const filterArray = await heros.filter( heroe=> heroe.biography.publisher === publisher )

  return {
    isLoading: false,
    filterArray
  }

}