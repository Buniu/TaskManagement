import "./navigation.style.css"
import { Outlet, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectLoggedUser } from "../../store/users/users.selector"
import { setLoggedUser } from "../../store/users/users.action"

const Navigation = () => {
    const loggedUser = useSelector(selectLoggedUser)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(setLoggedUser({}))
    }

    return (
        <>
        <div className="navigation-container">
            <Link className="navigation-link" to='/'> Main Page</Link>
            <Link className="navigation-link" to='/customer-page'> Customer Page</Link>
            <Link className="navigation-link" to='/task-center'> Task Page</Link>
            {Object.keys(loggedUser).length !==0 ?
                 (<div className='navigation-link'>Zalogowany {loggedUser.name} {loggedUser.surname}
                    <span className='nagivation-logout-button' onClick={logoutHandler}> Wyloguj się</span>
                 </div>) : (<Link className="navigation-link" to="/log-in-page">Zaloguj się</Link>)}

        </div>
        <Outlet/>
        </>
    )
}


export default Navigation