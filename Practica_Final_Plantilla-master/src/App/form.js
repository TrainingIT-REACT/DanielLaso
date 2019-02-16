import React from 'react';

class Formulario extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <button type="submit" className="btn btn-primary">acceder</button>
            </div>
        );
    }
}
export default Formulario;
