import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthGuard = ({ children }) => {

    const Navigate = useNavigate();

    useEffect(() => {

        const UserName = localStorage.getItem('UserName');

        const authenticated = UserName;

        if (!authenticated) {
            Navigate('/signin');
        }
    })

    return children

};

export default AuthGuard































