import React from 'react'
import { logout } from 'src/store/actions/auth';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
                <IconFullScreen />
                {/* {
                handle.active ? 
                    <img onClick={handle.exit} className='console-fullscreen' src="/icons/full-screen-close.svg" alt="full-screen-close" />
                    : <img onClick={handle.enter} className='console-fullscreen' src="/icons/full-screen.svg" alt="full-screen" />
                } */}
            </div>
        </div>
    )
}

export default withRouter(Header)


const IconFullScreen = () => {
    return <svg className='console-fullscreen' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}

const IconFullScreenClose = () => {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6H4C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4V1M14 1V4C14 4.53043 14.2107 5.03914 14.5858 5.41421C14.9609 5.78929 15.4696 6 16 6H19M19 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V19M6 19V16C6 15.4696 5.78929 14.9609 5.41421 14.5858C5.03914 14.2107 4.53043 14 4 14H1" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}