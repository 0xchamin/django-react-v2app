import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

//define initial state for entire application
const initialState = {
  token:null,
  error:null,
  loading:false
}
const authStart = (state, action) => {
  //return updated state
  return updateObject(state, {
    error: null,
    loading: true
  });
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
}

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading:false
  });
}

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
}


//when above action take places execute this
const reducer = (state=initialState, action) => {
  //return one of the method based on the receiving action
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default:
      return state;
  }
}

export default reducer;
