// Definimos la lista de acciones
const actions = [
  // Usuarios
  "UPDATE_NAME",
  "UPDATE_AGE"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
