import uuidv4 from 'uuid/v4';

const create = question => {
  return {
    question,
    id: uuidv4()
  };
};

export const write = {
  create
};
