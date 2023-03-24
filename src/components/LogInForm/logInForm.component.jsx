import "./logInForm.styles.js"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { selectUsersArray } from "../../store/users/users.selector"
import { setLoggedUser } from "../../store/users/users.action"

import { Button, TextField, Typography} from "@mui/material"
import { StyledPaper, StyledBox } from "./logInForm.styles.js"

const LogInForm = () => {
    const usersArray = useSelector(selectUsersArray)
    const [userForm, setUserForm] = useState({ login: '', password: '' })
    const [wrongCredentials, setWrongCredentials] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeHandler = (event) => {
        const { value, className } = event.target

        if (className === 'log-in-login-input') {
            setUserForm({ ...userForm, login: value })
        }
        if (className === 'log-in-password-input')
            setUserForm({ ...userForm, password: value })
    }

    const onChangeLogInHandler = (event) => {
        const { value} = event.target
            setUserForm({ ...userForm, login: value })
    }

    const onChangePasswordHandler = (event) => {
        const { value} = event.target
            setUserForm({ ...userForm, password: value })
    }


    const loginHandler = (event) => {
        event.preventDefault()
        const userFromDB = usersArray.find((user => user.login === userForm.login))
        console.log(userFromDB)
        console.log(userForm)
        if (userFromDB && userFromDB.password === userForm.password) {
            dispatch(setLoggedUser(userFromDB))
            setUserForm({ login: '', password: '' })
            navigate('/') //redirecting to main page
        }
        else
            console.log('wrong password')
            setWrongCredentials(true)
    }




    return (
        <StyledBox>
            <StyledPaper>
                <Typography> Sign In</Typography>
                <TextField label={'Login'} type='text' onChange={onChangeLogInHandler} value={userForm.login} />
                <TextField label={'Password'} type='password' onChange={onChangePasswordHandler} value={userForm.password} />
                {wrongCredentials ? <Typography color='red'> Wrong Login or Password </Typography> : <Typography></Typography>}
                <Button variant="contained" onClick={loginHandler}> LogIn</Button>
            </StyledPaper>
        </StyledBox>
    )
}

export default LogInForm