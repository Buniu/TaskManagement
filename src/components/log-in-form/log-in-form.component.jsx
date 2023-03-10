import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { selectUsersArray } from "../../store/users/users.selector"
import { setLoggedUser } from "../../store/users/users.action"

const LogInForm = () => {
    const usersArray = useSelector(selectUsersArray)
    const [userForm,setUserForm] = useState({login:'',password:''})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(navigate)
    const onChangeHandler = (event) => {
        const {value, className} = event.target

        if(className === 'log-in-login-input') {
            setUserForm({...userForm,login:value})
        }
        if(className === 'log-in-password-input')
            setUserForm({...userForm,password:value})
    }

    const loginHandler = (event) => {
        event.preventDefault()
        const userFromDB = usersArray.find((user => user.login === userForm.login))
        if(userFromDB.password === userForm.password) {
            dispatch(setLoggedUser(userFromDB))
            setUserForm({login:'',password:''})
            navigate('/')
        }
        else
            console.log('wrong password')
        
    }

    return (
        <div className='log-in-form-container'>
            <form onSubmit={loginHandler}>
                <label>Login</label>
                <input type='text' className='log-in-login-input' onChange={onChangeHandler} value={userForm.login} />
                <label>Password</label>
                <input type='password' className='log-in-password-input' onChange={onChangeHandler} value={userForm.password} />
                <button type='submit'> LogIn</button>
            </form>
        </div>
    )
}

export default LogInForm