import React from 'react'
import { logout } from 'src/store/actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ConsolePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const doLogout = () => {
        dispatch(logout())
        history.push('/')
    }

    return (
        <button onClick={doLogout}>Logout</button>
    )
}

export default ConsolePage