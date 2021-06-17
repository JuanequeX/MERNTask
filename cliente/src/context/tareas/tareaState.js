import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {v4 as uuid } from 'uuid';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
  const initialState = {
    tareas: [
      {id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
      {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
      {id: 3, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3},
      {id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
      {id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4},
      {id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
      {id: 7, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 3},
      {id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
      {id: 9, nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
      {id: 10, nombre: 'Elegir Colores', estado: false, proyectoId: 1},
      {id: 11, nombre: 'Elegir Plataforma de pago', estado: false, proyectoId: 4},
      {id: 12, nombre: 'Elegir Hosting', estado: true, proyectoId: 1}
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null
  }

  //Crear el dispatch y el state
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  //Creacion de funciones

  //Obtencion de las tareas del proyecto que se selecciono
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  //Agregar Tarea a proyecto seleccionado
  const agregarTarea = tarea => {
    tarea.id = uuid();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
  }

  //Validacion de la tarea y muestra un error
  const validarTarea = () => {
    dispatch ({
      type: VALIDAR_TAREA
    })
  }

  //Elimicaion de una tarea por id
  const eliminarTarea  = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
    })
  }

  //Camabia el estado de cada tarea
  const cambiarEstadoTarea = tarea => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea
    })
  }

  //Extraccion de la tarea actual
  const guardarTareaActual = tarea => {
    dispatch ({
      type: TAREA_ACTUAL,
      payload: tarea
    })
  }

  //Actualizar o edita una tarea
  const actualizarTarea = tarea => {
    dispatch ({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    })
  }

  //Elimina l;a tarea selecionada
  const limpiarTarea = () => {
    dispatch ({
      type: LIMPIAR_TAREA
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState;
