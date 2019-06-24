import axios from 'axios';

import { routes } from '../../config';

const create = (group_id, blog) => {
  console.log('create blog', group_id, blog);

  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: routes.api.groups.blog.create,
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        group_id,
        blog
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const get_all = group_id => {
  console.log('get_all blog');

  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.groups.blog.get_all(group_id),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const read = (group_id, blog_id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: routes.api.groups.blog.read(group_id, blog_id),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const Blogs = {
  create,
  get_all,
  read
};
