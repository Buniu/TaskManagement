import { Outlet, Link } from "react-router-dom"
import "./navigation.style.css"

const Navigation = () => {
    return (
        <>
        <div className="navigation-container">
            <Link className="navigation-link" to='/'> Main Page</Link>
            <Link className="navigation-link" to='/customer-page'> Customer Page</Link>
            <Link className="navigation-link" to='/task-center'> Task Page</Link>
        
        </div>
        <Outlet/>
        </>
    )
}


export default Navigation