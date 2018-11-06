import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  //object always returns a type
  return {
    type:actionTypes.AUTH_START
  }
}

export const authSuccess = token => {
  //object always returns a type
  return {
    type:actionTypes.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = error => {
  //object always returns a type
  return {
    type:actionTypes.AUTH_FAIL ,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('expirationDate');
    localStorage.removeItem('user');
    return {
      type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout( () => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
}

export const authLogin = (username, password) => {
//once login we want to execute/dispact a method
  return dispatch => {
    //authentication process start
    dispatch(authStart());

    //log user into rest framework
    axios.post('http://127.0.0.1:8000/rest-auth/login/', {
        username: username,
        password: password
    })
    .then(res => {
      //once successfully login django returns a key
      const token = res.data.key;
      const expirationDate = new Date ( new Date.getTime() + 3600 * 1000)
      //handling user session in somethig persists
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token));

      //check if expiration has expired
      dispatch(eckAuthTimeout(3600));

    })
    .cath(err => {
      dispatch(authFail(err));
    })
  }
}

export const authSignup = (username, email, password1, password2) => {
//once login we want to execute/dispact a method
  return dispatch => {
    //authentication process start
    dispatch(authStart());

    //log user into rest framework
    axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
        username: username,
        email: email,
        password1: password1,
        password2: password2
    })
    .then(res => {
      //once successfully login django returns a key
      const token = res.data.key;
      const expirationDate = new Date ( new Date.getTime() + 3600 * 1000)
      //handling user session in somethig persists
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token));

      //check if expiration has expired
      dispatch(eckAuthTimeout(3600));

    })
    .cath(err => {
      dispatch(authFail(err));
    })
  }
}
