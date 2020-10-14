import React from 'react'
import Logo from '../Atoms/Logo'
import NavMenu from '../Molecules/NavMenu'
const MainMenu = ()=>(

<header className="ed-header s-bg-grey s-py-2">
  <div className="ed-grid lg-grid-5">
   <Logo />
   <NavMenu /> 
  </div>
</header>
)

export default MainMenu