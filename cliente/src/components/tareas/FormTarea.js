import React, { useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {

  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareaseleccionada, errortarea, agregarTarea, validarTarea,
          obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if(tareaseleccionada !== null ) {
      guardarTarea(tareaseleccionada)
    } else {
      guardarTarea({
        nombre: ''
      })
    }
  }, [tareaseleccionada]);

  //State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: ''
  })

  //Extraer el nombre del proyecto
  const { nombre } = tarea

  //Si no hay proyecto seleccionado
  if(!proyecto) return null;

  //Array destructurong para extraer el proyecto actual
  const [proyectoActual]  = proyecto;

  //Lectura de los valores del formulario
  const handleChange = e => {
    guardarTarea( (prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    })
    )
  }

  const onSubmit = e => {
    e.preventDefault();

    //Validar
    if(nombre.trim() === '') {
      validarTarea();
      return;
    }

    //Bloque que revisa si es edicion o si es nueva tarea
    if(tareaseleccionada === null) {
      //Agregar La nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      //Actualizar tarea existente
      actualizarTarea(tarea);
      //Elimina tarea seleccionada del state
      limpiarTarea();
    }
    //Agregar La nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //Obtener y filtra las tareas del proyecto
    obtenerTareas(proyectoActual.id);
    //Reinicio del form
    guardarTarea({
      nombre: ''
    })
  }
  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
        >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value= {tareaseleccionada  ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      { errortarea ? <p className="mensaje error">
        El nombre de la tarea es obligatorio</p> : null }
    </div>
   );
}

export default FormTarea;
