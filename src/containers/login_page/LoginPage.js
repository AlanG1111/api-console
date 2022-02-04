import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ErrorAlert from './errorAuth'
import Spinner from './spinner'

import {authenticate, authenticateFailure} from 'src/store/actions/auth';

import './loginPage.css'

function LoginPage({history}) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state) => state.auth.loading);
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);
  const error = useSelector((state) => state.auth.error)
  const [loginDirty, setLoginDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // console.log({isLoggedIn})
  // console.log("login", login)
  console.log('loading', loading);

  useEffect(() => {
    dispatch(authenticateFailure(null))
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };

  function onSubmit(event) {
    console.log('error', error)
    event.preventDefault();
    setIsLoading(true)

    if(!error) {
      doLogin();
    }
  }

  const blurHandler = (e) => {
    console.log('e.target.id', e.target.id)
    switch (e.target.id) {
      case 'login':
        setLoginDirty(true)
        break;
      case 'password':
        setPasswordDirty(true)
        break;
    }
  }

  const loginHandler = (e) => {
    const value = e.target.value
    const label = document.getElementById("login-label")
    const input = document.getElementById("login")
    const loginUsernameRegExp = /a-zA-Z0-9/
    const loginEmailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] +@ [a-zA-Z0 -9-]+(?:\.[a-zA-Z0-9-]+)*$/
    setLogin(value)

    if (loginEmailRegExp.test(String(value)) || loginUsernameRegExp.test(String(value)) 
    || loginDirty) {
      label.style.color = "red"
      input.style.borderColor = "red"
      setFormValid(true)
    } else {
      setPasswordDirty(false)
      label.style.color = "black"
      input.style.borderColor = "rgba(0, 0, 0, 0.2)"
    }
  }

  const passwordHandler = (e) => {
    const label = document.getElementById("password-label")
    const input = document.getElementById("password")
    const value = e.target.value
    const passwordRegExp = /a-zA-Z0-9_\.-\s/
    setPassword(value)
    console.log("e.target.value", value)

    if(passwordDirty || passwordRegExp.test(String(value))){
      label.style.color = "red"
      input.style.borderColor = "red"
      setFormValid(true)
    } else {
      label.style.color = "black"
      input.style.borderColor = "rgba(0, 0, 0, 0.2)"
    }
  }

  return (
    <div className='wrapper'>
      <img className='logo-styled' src="/icons/logo.svg" alt="" />
      <form className='form-login' onSubmit={onSubmit} action="/">
        <span>API-консолька</span>
        {error ? <ErrorAlert error={error}/> : null}
        {/* Login input  */}
        <label htmlFor='login' id='login-label'>Логин</label>
          <input 
            onBlur={(e) => {blurHandler(e)}}
            id='login' type='text' value={login} 
            onChange={(e) => loginHandler(e)} 
            placeholder="Логин" required/>
        {/* Sublogin input  */}
        <label htmlFor='sublogin'>Сублогин</label>
          <input
            id='sublogin' type='text' value={sublogin} 
            onChange={(e) => setSubLogin(e.target.value)} 
            placeholder="Сублогин" />
        {/* Password input  */}
        <label htmlFor='password' id='password-label'>Пароль </label>
          <input
            onBlur={(e) => {blurHandler(e)}}
            id='password' type='password' value={password} 
            onChange={(e) => passwordHandler(e)} 
            placeholder="Пароль" required/>        
        <button type="submit" onClick={onSubmit} disabled={false}>
          {isLoading && !error ? <Spinner /> : 'Войти'}
        </button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
