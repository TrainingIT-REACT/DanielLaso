import React from 'react';
import { Provider } from "react-redux";

import store from './store';
import PerfilDatos from './perfil-datos';
import UpdateName from "./UpdateName";

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Perfil = () => {
  return <div>
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-8">
          <h1 className="mB20 text-left">Datos del Perfil</h1>
            <PerfilDatos />
          </div>
          <div className="col-4">
            <UpdateName />
          </div>
        </div>
      
        
      </div>
    </Provider>
      
  </div>;
}

export default Perfil;