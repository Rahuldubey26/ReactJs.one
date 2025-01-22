import React from 'react'
import authService from "../../appwrite/config"
import { logout } from "../../store/authSlice"
import { useDispatch } from 'react-redux';

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
            <Button clasName="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Logout</Button>
        </div>
    )
}

export default LogoutBtn
