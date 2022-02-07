import React from 'react'
import { logout } from 'src/store/actions/auth';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Header = ({history}) =>  {
    const dispatch = useDispatch()
    const value = localStorage.getItem('persist:root')
    const login = JSON.parse(value).login
    const resLogin = login.slice(1, login.length - 1)
    const subLogin = JSON.parse(value).sublogin
    const resSubLogin = subLogin.slice(1, subLogin.length - 1)    
    
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
                    <span>{resLogin} 
                        <span className='console-info-dots'>:</span> 
                        {resSubLogin.length > 0 ? resSubLogin : 'without sublogin'} 
                    </span>
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
