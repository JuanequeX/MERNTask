import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
      case FORMULARIO_PROYECTO:
        return{
          ...state,
          formulario: true
        }
      case OBTENER_PROYECTOS:
        return{
          ...state,
          proyectos: action.payload
        }
      case AGREGAR_PROYECTOS:
        return{
          ...state,
          proyectos: [action.payload, ...state.proyectos],
          formulario: false,
          errorformulario: false
        }
      case VALIDAR_FORMULARIO:
        return {
          ...state,
          errorformulario: true
        }
      case PROYECTO_ACTUAL:
        return {
          ...state,
          proyecto: state.proyectos.filter( proyecto => proyecto.id === action.payload )
        }
      case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter( proyecto => proyecto.id !== action.payload ),
        proyecto: null,
      }
    default:
      return state;
  }
}
