import React from 'react'
import { useDispatch } from 'react-redux';
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import Button from '../Button';
function LogoutBtn() {
    const displatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            displatch(logout())
        })
    }
    return (
        <div>
            <Button  clasName="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandler} >Logout</Button>
        </div>
    )
}

export default LogoutBtn
