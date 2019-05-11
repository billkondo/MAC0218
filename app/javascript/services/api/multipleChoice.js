import { routes } from '../../config';
import axios from 'axios';

const create = multiple_choice_problem => {
  axios({
    method: 'POST',
    url: routes.createMultipleChoice,
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
    },
    data: {
      multiple_choice_problem
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const get_user = () =>
  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.current_user_multiple_choice_problems,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

// TODO define url
const get_multiple_choice_problem = id =>
  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.get_multiple_choice(id),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

export const MultipleChoice = {
  create,
  get_user,
  get_multiple_choice_problem
};
