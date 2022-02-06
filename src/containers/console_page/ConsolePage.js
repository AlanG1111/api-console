import React from 'react'
import { logout } from 'src/store/actions/auth';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ConsolePage = ({history}) =>  {
    const dispatch = useDispatch()
    
    const doLogout = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <button onClick={doLogout}>Logout</button>
    )
}

export default withRouter(ConsolePage)
