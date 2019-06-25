import { routes } from '../../config';
import axios from 'axios';

const create = multiple_choice_problem => {
  return new Promise((resolve, reject) => {
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
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const get_problems = (
  cancelToken // TODO: Should be in another file, instead of multipleChoice.js
) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.problems_all,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      cancelToken
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

const get_user = cancelToken =>
  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.current_user_multiple_choice_problems,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      cancelToken
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

const get_user_favorite_problems = cancelToken =>
  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.get_user_favorite_problems,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      cancelToken
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

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

/* 
  flag =  true: problem is favorite
  flag = false: problem is not favorite
 */
const update_multiple_choice_favorites = (id, flag) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.api.update_multiple_choice_favorites,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        multiple_choice_problem_id: id,
        flag
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

const update_multiple_choice = (multiple_choice_problem, id) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.api.update_multiple_choice,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        multiple_choice_problem,
        id
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

const delete_multiple_choice = id =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.api.delete_multiple_choice,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        id
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

export const MultipleChoice = {
  create,
  get_user,
  get_problems,
  get_multiple_choice_problem,
  update_multiple_choice_favorites,
  get_user_favorite_problems,
  update_multiple_choice,
  delete_multiple_choice
};
