import React from 'react'
import { logout } from 'src/store/actions/auth';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import iconFullScreenClose from './icons/full-screen-close'
import iconFullScreen from './icons/full-screen'
import logOut from './icons/log-out';
import { TEXT_API_CONSOLE, TEXT_EXIT } from '../text_constants';

const Header = ({handle, history}) =>  {
    const dispatch = useDispatch()
    const value = localStorage.getItem('persist:root')
    const login = JSON.parse(value).login
    const resLogin = login.slice(1, login.length - 1)
    const subLogin = JSON.parse(value).sublogin
    const resSubLogin = subLogin.slice(1, subLogin.length - 1)
    
    console.log("value", value)
    
    const doLogout = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <div className='console-header'>
            <div className='console-logo-block'>
                <img src="/icons/logo.svg" alt="Logo" />
                <span>{TEXT_API_CONSOLE}</span>
            </div>
            <div className='console-header-controls'>
                <div className='console-users-info'>
                    <span>{resLogin} 
                        <span className='console-info-dots'>:</span> 
                        {resSubLogin.length > 0 ? resSubLogin : 'without sublogin'} 
                    </span>
                </div>
                <div onClick={doLogout} className='console-colored-button console-exit-button'>
                    <span>{TEXT_EXIT}</span>{logOut}
                </div>
                {
                handle.active ? 
                    <div onClick={handle.exit} className='console-colored-button'>{iconFullScreenClose}</div>
                    : <div onClick={handle.enter} className='console-colored-button'>{iconFullScreen}</div>
                }
            </div>
        </div>
    )
}

export default withRouter(Header)
