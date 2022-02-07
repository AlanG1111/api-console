import React from 'react'
import { logout } from 'src/store/actions/auth';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Header = ({history}) =>  {
    const dispatch = useDispatch()
    
    const doLogout = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <div className='console-header'>
            <div className='console-logo-block'>
                <img src="/icons/logo.svg" alt="Logo" />
                <span>API-консолька</span>
            </div>
            <div className='console-header-controls'>
                <div className='console-users-info'>
                    <span>Email : Sublogin </span>
                </div>
                <div className='console-exit-button' onClick={doLogout}>
                    <span>Выйти</span>
                    <img src="/icons/log-out.svg" alt="log-out" />
                </div>
                <img src="/icons/full-screen.svg" alt="full-screen" />
            </div>
        </div>
    )
}

export default withRouter(Header)
