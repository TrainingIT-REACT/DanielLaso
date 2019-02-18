import React from 'react';

// Contexto de usuario
import UserContext from './contexts/user';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Login = ({ location }) => {
  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div>
        { signedIn ? (
          <p>OK!</p>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Usuario</label>
              <input type="text" className="form-control"  placeholder="Usuario" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Contraseña</label>
              <input type="password" className="form-control"  placeholder="Contraseña" />
            </div>
            
            <button className="btn btn-primary" onClick={() => updateUser(true)}>Login</button>
            { (location.state && location.state.message) &&
              <p>
                { location.state.message }
              </p>
            }
          </>
        )}
      </div>
    }}
  </UserContext.Consumer>;
}

export default Login;
