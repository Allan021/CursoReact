import React from 'react'
import ElementNav from '../Atoms/ElementNav'


const NavMenu = ()=>(

<nav className="nav lg-cols-4 s-cross-center ed-grid full"> 
    <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
     <ElementNav name="Inicio" url='/'/>
     <ElementNav name="Cursos" url='/cursos' />
     <ElementNav name="Formulario" url='/formulario' />
     <ElementNav name="Usuarios" url='/users' />
    </ul>
  </nav>









)

export default NavMenu;