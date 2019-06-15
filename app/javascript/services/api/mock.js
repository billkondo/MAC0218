import { routes } from '../../config';
import axios from 'axios';

const create = mock_problem =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.createMock,
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


  export const Mock = {
    create,
  };
  