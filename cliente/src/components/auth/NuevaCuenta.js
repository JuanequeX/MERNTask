import React, { useState }from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar:''
  });

  //Extraer usuario
  const {nombre, email, password, confirmar} = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  //Cuando el ususario quiere iniciar sesion
  const onSubmit = e  => {
    e.preventDefault();

    //Validar Que no haya campos vacios

    //Passwor minimo de seis caracrteres

    //Los dos password sean iguales

    //Pasarlo al action

  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Registro</h1>

        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu E-mail"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value ="Registrarme"
            />
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">
          Volver a Iniciar Sesion
        </Link>
      </div>
    </div>
  );
}

export default NuevaCuenta;
