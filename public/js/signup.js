import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (email, name, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:5050/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'User Registered Successfully!!!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    else console.log("err:",err);
  } catch (err) {
    // console.log(err);
    
    showAlert('error', err.response.data.message);

  }
};
