import  React from 'react';
import './styles/styles.scss';
import Curso from './curso.jsx';
//esta es una funcion flecha que me va a retornar algo

const App = ()=> (//bueno no me dejaron crear el codigo pero lo que iba a escribir era basicamente que no necesito poner los divs ya que dentro el componente curso ya exite ese componente de react

    <>
<div className="l-section s-py-4">

  <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
 
    <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
      <h1>Banner principal de dos columnas con EDgrid</h1>
      <p>Agradecido con el de arriba, pero muy con el de arriba</p>
 
      <div className="s-main-center">
        <a href="https://google.com" className="button s-mr-2 s-mb-2 m-mb-0">Botón 1</a>
        <a href="https://google.com" className="button s-mb-2 m-mb-0">Botón 2</a>
      </div>
    </div>
   
    <div>
      <div className="img-container s-ratio-16-9">
        <img alt="Imagen de edTeam" className="s-radius-1" src="https://ed-grid.com/assets/img/og-image.jpg" />
      </div>
    </div>
  </div>
</div>

<div className="ed-grid s-grid-3">
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
</div>
</>

);
export default App;//esto es para exportar el componente que acabo de crear
//este es para exportar los componentes y defauit es que sera el principal
