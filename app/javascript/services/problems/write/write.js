import uuidv4 from 'uuid/v4';

const create = question => {
  return {
    question,
    app_id: uuidv4()
  };
};

export const write = {
  create
};
