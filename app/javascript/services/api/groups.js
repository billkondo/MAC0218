import axios from 'axios';

import { routes } from '../../config';

const create = async group => {
  const res = await axios({
    method: 'POST',
    url: routes.api.groups.create,
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
    },
    data: {
      group
    }
  });

  return res;
};

const current_user_groups = async () => {
  const res = await axios({
    method: 'GET',
    url: routes.api.groups.current_user_groups,
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
    }
  });

  return res;
};

const get_group = async id => {
  console.log(id);
  const res = await axios({
    method: 'GET',
    url: routes.api.groups.read(id),
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
    }
  });
  return res;
};

export const Groups = {
  create,
  current_user_groups,
  get_group
};
