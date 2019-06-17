import axios from 'axios';

import { routes } from '../../config';

const get_public_profile = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.users.get_public_profile,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const profile = {
  get_public_profile
};
