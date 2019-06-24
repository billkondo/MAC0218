import axios from 'axios';

import { routes } from '../../config';

const create = mock => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.api.mocks.create,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        mock
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const get_problems_list = () => {
  console.log('get problems list');
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.mocks.get_problems_list,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const get_all_mocks = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.mocks.get_all_mocks,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const get_mock = (id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.mocks.get(id),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const Mock = {
  create,
  get_problems_list,
  get_all_mocks,
  get_mock
};
