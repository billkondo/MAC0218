import axios from 'axios';
import { routes } from '../../config';

const sign_up = ({ username, email, password, password_confirmation }) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.api.sign_up,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        user: {
          username,
          email,
          password,
          password_confirmation
        },
        commit: 'Sign up',
        utf8: '✓'
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

export const Auth = {
  sign_up
};
