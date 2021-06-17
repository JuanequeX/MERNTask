import React, { useReducer } from "react";

import {v4 as uuid} from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from '../../types';


const ProyectoState = props => {

  const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño Sitio Web'},
        {id: 4, nombre: 'MERN'}

  ]

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null
  }

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  //Serie de funciones para que jale el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  //Obtencion de los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  //En este bloque de codigo agregaremos los nuevos proyectos
  const agregarProyecto = proyecto => {
    proyecto.id = uuid();
    //Insertar el proyecto en el state
    dispatch ({
      type: AGREGAR_PROYECTOS,
      payload: proyecto
    })
  }

  //Bloque que valida que el formulario de nueva tarea este llenado
  const mostrarError = () => {
    dispatch ({
      type: VALIDAR_FORMULARIO
    })
  }

  //Este bloque definira el cambio en el proyecto que seleccione el usuario
  const proyectoActual = proyectoId => {
    dispatch ({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }
    //Boton que elimina un proyecto
    const eliminarProyecto =  proyectoId => {
       dispatch ({
         type: ELIMINAR_PROYECTO,
         payload: proyectoId
       })
    }


  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
       {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;
