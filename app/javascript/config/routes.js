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
}

export const routes = {
  home: '/',

  sign_out: '/users/sign_out/',

  multiple_choice_form: '/create_problem/multiple_choice_form',

  edit_multiple_choice: editMultipleChoice,

  createMultipleChoice: '/api/problems/create_multiple_choice',

  current_user_multiple_choice_problems:
    '/api/problems/current_user_multiple_choice',

  user_profile: '/profile/',

  read_multiple_problem: readMultipleProblem,

  solve_multiple_problem: solveMultipleProblem,

  api: {
    problems: '/api/problems',
    get_multiple_choice: getMultipleChoice,
    update_multiple_choice_favorites:
      '/api/problems/update_multiple_choice_favorites',
    get_user_favorite_problems: '/api/problems/get_multiple_choice_favorites',
    update_multiple_choice: `/api/problems/update_multiple_choice`,
    delete_multiple_choice: `/api/problems/delete_multiple_choice`,
    sign_up: '/api/auth/sign_up'
  }
};
