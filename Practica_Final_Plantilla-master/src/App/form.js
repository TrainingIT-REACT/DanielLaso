import React from 'react';

class Formulario extends React.Component {
    render() {
        return (


            <div className="row">
                <div className="four columns">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" placeholder="Nombre Canción" type="text" />
                </div>
               
            </div>
        

        );
        
        
    }
}
export default Formulario;
