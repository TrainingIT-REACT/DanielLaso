import types from './types';

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});
export const updateAge = (age) => ({
  type: types.UPDATE_AGE,
  age
});
