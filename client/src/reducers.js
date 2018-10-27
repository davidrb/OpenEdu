import { LOGOUT, CHANGE_USER, ERROR, CLEAR_ERROR } from './actions.js';

let rootReducer = (state, action) => {
  switch(action.type) {
    case LOGOUT:
      return { ...state, username: null };
    case CHANGE_USER:
      return { ...state, username: action.user };
    case ERROR:
      return { ...state, error: action.what };
    case CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return {};
  }
}

export default rootReducer;
