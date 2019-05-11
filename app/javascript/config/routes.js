const readMultipleProblem = id => {
  // TODO assert id != NULL
  return `/problems/multiple_choice/${id}`;
};

const getMultipleChoice = id => {
  return `/api/problems/get_multiple_choice/?id=${id}`;
};

export const routes = {
  sign_out: '/users/sign_out/',

  multiple_choice_form: '/create_problem/multiple_choice_form',

  createMultipleChoice: '/api/problems/create_multiple_choice',

  current_user_multiple_choice_problems:
    '/api/problems/current_user_multiple_choice',

  user_profile: '/profile/',

  read_multiple_problem: readMultipleProblem,

  api: {
    get_multiple_choice: getMultipleChoice
  }
};
