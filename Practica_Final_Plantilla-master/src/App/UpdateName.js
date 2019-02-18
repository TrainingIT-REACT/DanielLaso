import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateName, updateAge } from './actions/user';

const UpdateName = ({ updateName, updateAge  }) => {
  const name = createRef();
  const age = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateName(name.current.value);
    updateAge(age.current.value);
    name.current.value = '';
    age.current.value = '';
  }



  return <form onSubmit={onSubmit}>
    <label htmlFor="name">¿Cuál es tu nombre?</label>
    <input id="name" className="form-control " type="text" ref={name} placeholder="Angel, Tana, Raquel,..." />

    <label htmlFor="age" className="mT20">¿Cuál es tu edad?</label>
    <input id="age" className="form-control" type="text" ref={age} placeholder="..." />
    
    <button className="btn btn-default mT20">Actualizar nombre</button>
  </form>
}

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updateAge: (age) => dispatch(updateAge(age)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UpdateName);
