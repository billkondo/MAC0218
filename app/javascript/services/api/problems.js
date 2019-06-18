import axios from 'axios';

import { routes } from '../../config';

const get_all = () => {
  console.log('get all');
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.problems.get_all,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const problems = () => ({
  get_all
});
