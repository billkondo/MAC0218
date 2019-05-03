import { routes } from '../../config';
import axios from 'axios';

const create = question => {
  console.log(question);

  axios({
    method: 'POST',
    url: routes.createMultipleChoice,
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
    },
    data: {
      question
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const MultipleChoice = {
  create
};
