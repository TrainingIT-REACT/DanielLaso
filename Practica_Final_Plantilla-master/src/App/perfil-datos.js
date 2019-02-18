import React from 'react';
import { connect } from 'react-redux';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const PerfilDatos = ({name, age}) => {
  return <div>
    <ul>
      <li>
        <strong>Nombre:</strong> {name != null && name !== '' ? name : 'Daniel'}
      </li>
      <li>
        <strong>Años:</strong> {age != null && age !== '' ? age : '25'}
      </li>
    </ul> 
    </div>
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    name: state.user.name,
    age: state.user.age
  }
}

export default connect(
  mapStateToProps
)(PerfilDatos);


