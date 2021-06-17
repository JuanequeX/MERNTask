import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

  //Extraccion del proyecto por destructuring
  const [proyectoActual] = proyecto;
  //funcion que hara la eliminacion al presionar el boton de eliminar
  const tareaEliminar = id => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  }

  //Funcion que modifica el estado completo o incopleto de las tares
  const cambiarEstado = tarea => {
    if(tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  }

  //Agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea);
  }


  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        { tarea.estado
        ?
          (
            <button
              type="button"
              className="completo"
              onClick={() => cambiarEstado(tarea)}
            >Completo</button>
          )
        :
          (
            <button
              type="button"
              className="incompleto"
              onClick={() => cambiarEstado(tarea)}
            >Incompleto</button>
          )
        }
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >Editar</button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >Eliminar</button>
      </div>
    </li>
  );
}

export default Tarea;
