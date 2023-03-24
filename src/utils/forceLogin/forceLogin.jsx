import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../store/users/users.selector";
import { useEffect } from "react";


const ForceLogin = ({ children }) => {
    const navigate = useNavigate()

    const isLoggedIn = Boolean(useSelector(selectLoggedUser))

    useEffect(()=>{
        if (!isLoggedIn) {        
            navigate('/log-in-page')
        }
    },[isLoggedIn, navigate])



    return children
}


export default ForceLogin