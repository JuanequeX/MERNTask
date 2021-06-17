import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {
  //Aqui obtengo el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //Obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id); //Fijacion del proyecto actual
    obtenerTareas(id); //Filtracion de tareas cuando se de click en la tarea
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={ () => seleccionarProyecto(proyecto.id) }
      >{proyecto.nombre}</button>
    </li>
    );
}

export default Proyecto;
