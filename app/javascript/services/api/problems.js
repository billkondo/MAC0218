import axios from 'axios';

import { routes } from '../../config';

const get_all = (cancelToken = null) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.problems.get_all,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      cancelToken
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const get_user_problems = (cancelToken = null) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.problems.get_user_problems,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      cancelToken
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const Problems = {
  get_all,
  get_user_problems
};
