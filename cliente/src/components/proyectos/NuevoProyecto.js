import React, { useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  //Aqui obtengo el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  //State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

  //Extraer nombre de proyecto
  const {nombre} = proyecto;

  //lee los contenidos del input

  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

  //cuando el ususario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();

    //Validar el proyecto
    if(nombre === '') {
      mostrarError();
      return;
    }
    //Agregar al state
    agregarProyecto(proyecto);
    //Reiniciar el formulario
    guardarProyecto({
      nombre: ''
    })
  }


  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >Nuevo Proyecto</button>

    {formulario ?
        (
          <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
            >
            <input
              type="text"
              className="input-text"
              placeholder="Nombre Proyecto"
              name="nombre"
              value={nombre}
              onChange ={onChangeProyecto}
            />

            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Agregar Proyecto"
            />
          </form>
        ) : null }

      {errorformulario ? <p className="mensaje error">
        El nombre del proyecto es obligatorio
      </p>: null}
    </>
   );
}

export default NuevoProyecto;
