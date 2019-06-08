import axios from 'axios';
import { routes } from '../../config';

const create = write_problem => {
  console.log(write_problem);
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.api.problems.write.create,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        write_problem
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const get = ID => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.problems.write.get(ID),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const write = {
  create,
  get
};
