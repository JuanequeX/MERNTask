import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup }from 'react-transition-group';


const ListadoProyectos = () => {

  //Extraccion de proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //Obtener proyectos ciuando carga el componente
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  //Analisis del contenido de poryectos
  if(proyectos.length === 0 ) return <p>No hay proyectos, Crear un proyecto</p>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //  const nodeRef = React.useRef(null)

  return (
    <ul className="listado-proyectos">
   <TransitionGroup>
     {proyectos.map(proyecto =>(
        <CSSTransition
          key={proyecto.id}
         // nodeRef={nodeRef} in
          timeout={300}
          classNames="proyecto"
        >
          <Proyecto
            proyecto={proyecto}
          // ref={nodeRef}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
    </ul>
   );
}

export default ListadoProyectos;
