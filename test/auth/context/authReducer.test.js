import { renderHook } from "@testing-library/react"
import { useReducer } from "react"
import { act } from "react-dom/test-utils"
import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en authReducer', () => { 

  const initialState = {
    logged: false,
    user: 'Initial state'
  }

  test('Debe retornar el estado por defecto', () => { 

    const { result } = renderHook( ()=> useReducer( authReducer, initialState) )
    const state = result.current[0]

    expect( state ).toEqual( initialState );


  })

   test('Debe de ( login ) llamar el login autenticar y establecer el user', () => { 

    const { result } = renderHook( ()=> useReducer( authReducer, initialState) )

    const dispatch = result.current[1]

    const user = { id: 'ABC', name: 'Gaston' }
    const action = { type: types.login, payload: user }

    act( ()=> dispatch( action ) );

    const newState = result.current[0]

    expect( newState.logged ).toBeTruthy()
    expect( newState.user ).toEqual( user )
    expect( newState.user ).not.toEqual( initialState.user )

  })

  test('Debe de ( logout ) debe borrar el name del usuario y logged en false', () => { 

    const { result } = renderHook( ()=> useReducer( authReducer, initialState) )
    const dispatch = result.current[1]
  
    const action = { type: types.logout }
  
    act( ()=> dispatch( action ) );
  
    const newState = result.current[0]
  
    expect( newState.logged ).toBeFalsy()
    expect( newState.user ).toBeUndefined()

  
  })


})