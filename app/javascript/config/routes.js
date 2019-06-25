const readMultipleProblem = id => {
  // TODO assert id != NULL
  return `/problems/multiple_choice/${id}`;
};

const getMultipleChoice = id => {
  return `/api/problems/get_multiple_choice/?id=${id}`;
};

const editMultipleChoice = id => {
  return `/edit_problem/multiple_choice/${id}`;
};

const solveMultipleProblem = id => {
  return `/practice/${id}`;
};

const readWriteProblem = id => {
  return `/problems/write/${id}`;
};

const getWriteProblem = id => {
  return `/api/problems/write/get/?app_id=${id}`;
};

export const routes = {
  home: '/',

  sign_in: '/sign-in',

  sign_up: '/sign-up',

  sign_out: '/users/sign_out/',

  multiple_choice_form: '/problems/create_problem/multiple_choice_form',

  write_form: '/problems/create_problem/write_form',

  edit_multiple_choice: editMultipleChoice,

  createMultipleChoice: '/api/problems/create_multiple_choice',

  current_user_multiple_choice_problems:
    '/api/problems/current_user_multiple_choice',

  user_profile: '/profile/',

  read_multiple_problem: readMultipleProblem,

  solve_multiple_problem: solveMultipleProblem,

  read_write_problem: readWriteProblem,

  profile: {
    main: '/profile/',
    edit: '/profile/edit_profile/'
  },

  groups: {
    main: '/groups/',
    create: '/groups/create_group/',
    read: id => `/groups/read/${id}`,
    blog: {
      create: group_id => `/groups/${group_id}/create`,
      read: (group_id, blog_id) => `/groups/${group_id}/read/${blog_id}`
    }
  },

  // client side endpoints for problems
  problems: {
    main: '/problems/',
    create_select_type: '/problems/create_problem',

    write: {
      read: id => `/problems/write_problem/?id=${id}`
    },

    multiple_choice: {
      read: id => `/problems/multiple_choice/?id=${id}`
    }
  },

  mocks: {
    main: '/mocks/',
    create: '/mocks/create_mock/',
    read: id => `/mocks/read/${id}`
  },

  api: {
    problems_all: '/api/problems',
    get_multiple_choice: getMultipleChoice,
    update_multiple_choice_favorites:
      '/api/problems/update_multiple_choice_favorites',
    get_user_favorite_problems: '/api/problems/get_multiple_choice_favorites',
    update_multiple_choice: `/api/problems/update_multiple_choice`,
    delete_multiple_choice: `/api/problems/delete_multiple_choice`,

    sign_up: '/api/auth/sign_up',

    // users endpoints
    users: {
      get_public_profile: '/api/users/get_public_profile'
    },

    // problems endpoints
    problems: {
      get_all: '/api/problems/get_all',

      // write problems endpoints
      write: {
        create: '/api/problems/write/create',
        get: id => `/api/problems/write/get/?id=${id}`
      },

      // multiple choice problems endpoints
      multiple_choice: {
        create: '/api/problems/multiple_choice/create',
        get: id => `/api/problems/multiple_choice/get/?id=${id}`,
        delete: id => `/api/problems/multiple_choice/delete/?id=${id}`,
        update: id => `/api/problems/multiple_choice/update/?id=${id}`
      }
    },

    mocks: {
      create: '/api/mocks/create',
      get_problems_list: '/api/mocks/get_problems_list',
      get_all_mocks: '/api/mocks/get_all_mocks',
      get: id => `/api/mocks/get_mock/?id=${id}`
    },

    groups: {
      create: '/api/groups/create',
      current_user_groups: '/api/groups/current_user_groups',
      read: id => `/api/groups/read/?id=${id}`,
      blog: {
        create: '/api/groups/blog/create',
        get_all: group_id => `/api/groups/blog/get_all/?group_id=${group_id}`,
        read: (group_id, blog_id) =>
          `/api/groups/blog/read/?group_id=${group_id}&blog_id=${blog_id}`
      }
    }
  }
};
