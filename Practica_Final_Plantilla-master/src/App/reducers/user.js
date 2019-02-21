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
        ...state,
        name: action.name
      };
    case types.UPDATE_AGE:
      return {
        ...state,
        age: action.age
      };
    default:
      return state;
  }
}

export default reducer;
