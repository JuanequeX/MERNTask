import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
  return (
    <aside>
      <h1>MERN<span>Task</span></h1>
      <h2>To Do List</h2>

      <NuevoProyecto />

       <div className="proyectos">
          <h2>Tus Proyectos</h2>
       </div>

      <ListadoProyectos />
    </aside>
  );
}

export default Sidebar;
