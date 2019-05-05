import { routes } from '../../config';
import axios from 'axios';

const create = multiple_choice_problem => {
  console.log(multiple_choice_problem);

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

export const MultipleChoice = {
  create
};
