import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context'

export const Navbar = () => {

  // useNavigate es un custom hook que nos proporciona react-router para poder moverme hacia una ruta cuando se ejecuta un evento
  const navigate = useNavigate()

  // el replace es opcional y lo que hace, es que no se pueda volver al historial anterior de la pagina cuando apretamos el boton de atras
  const { user, logout } = useContext( AuthContext )

  const onLogout = () => {

    const regresoLog = logout()

    console.log(regresoLog)
    navigate('/login',{
      replace: true
    });
  }

  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <Link 
          className="navbar-brand" 
          to="/">
            Asociaciones
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : ''}`}
              to="/marvel"
            >
            Marvel
            </NavLink>
            <NavLink
              className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : ''}`}
              to="/dc"
            >
            DC
            </NavLink>
            <NavLink
              className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : ''}`}
              to="/search"
            >
            Search
            </NavLink>
            {/* <NavLink
              className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : ''}`}
              to="/hero"
            >
            Hero
            </NavLink>
            <NavLink
              className={ ({ isActive })=> `nav-item nav-link ${ isActive ? 'active' : ''}`}
              to="/search"
            >
            Search
            </NavLink> */}
          </div>
        </div>
        <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
          <ul className='navbar-nav ml-auto'>

            <span className='nav-item nav-link text-primary'>
              { user?.name }
            </span>

            <button 
                className='nav-item nav-link btn'
                onClick={ onLogout }
            >
                Logout
            </button>

          </ul>
        </div>
    </nav>
  )
}