import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PrivateRoutes } from "../../src/router/PrivateRoutes"

describe('Pruebas en PrivateRoutes', () => { 

  test('debe de mostrar el children si esta autenticado', () => { 

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user:{
        id: 'abc',
        name: 'Juan Carlos'
      }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoutes>
            <h1>Ruta privada</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>

    )

    expect( screen.getByText('Ruta privada') ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalledWith( "lastPath", "/search?q=batman" );


   })

})