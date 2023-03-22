import "./navigation.style.css"
import { Outlet, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectLoggedUser } from "../../store/users/users.selector"
import { setLoggedUser } from "../../store/users/users.action"

import Footer from "../../components/Footer/footer.component"

const Navigation = () => {
    const loggedUser = useSelector(selectLoggedUser)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(setLoggedUser({}))
    }

    return (
        <>
        <div className="navigation-container">
            <nav className="navigation-links">
                <Link className="navigation-link" to='/'> Main Page</Link>
                <Link className="navigation-link" to='/customer-page'> Customer Page</Link>
                <Link className="navigation-link" to='/task-center'> Task Page</Link>
            </nav>
            {Object.keys(loggedUser).length !==0 ?
                 (<div className='navigation-logged-user'>{loggedUser.name} {loggedUser.surname}
                    <span className='navigation--login-link' onClick={logoutHandler}> Logout</span>
                 </div>) : (<Link className="navigation--login-link" to="/log-in-page">Log In</Link>)}

        </div>
        <Outlet/>
        <Footer/>
        </>
    )
}


export default Navigation