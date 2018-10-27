import { connect } from 'react-redux';
import { login, logout } from '../actions.js';
import OpenEdu from '../components/OpenEdu.js';

const OpenEduContainer = connect(
  state => ({ ...state, username: state.username }),
  dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(logout())
  })
)(OpenEdu);

export default OpenEduContainer;
