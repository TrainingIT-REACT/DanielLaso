import types from '../actions/types';

// Estado inicial
const initialState = {
  name: "",
  age: ""
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_NAME:
      return {
        name: action.name
      };
    case types.UPDATE_AGE:
      return {
        age: action.age
      };
    default:
      return state;
  }
}

export default reducer;
