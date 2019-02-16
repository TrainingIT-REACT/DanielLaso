import React from 'react';

class Formulario extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Usuario</label>
                    <input type="email" className="form-control"  placeholder="Usuario" />
                    <label htmlFor="exampleInputEmail1">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>
                <button type="submit" className="btn btn-primary">acceder</button>
            </div>
        );
    }
}
export default Formulario;
