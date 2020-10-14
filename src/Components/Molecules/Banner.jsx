import React from 'react'//todos estos son clases que tienen sus atricbutos y metodods
import BannerEDteam from '../Atoms/BannerEDTEAM'

//Este banner es un componente presentacional o tonto ya que es de tipo funcion y no recibe props por lo que no es dinamico y lo que recibe props automaticamente es un componente deinamico y esas props se declaran en las propiedades de los componentes
const Banner = ()=> (
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
      <BannerEDteam alt="Imagen de Edteam" Urlimage="https://ed-grid.com/assets/img/og-image.jpg" />
    </div>
  </div>
</div>
</div>
);

export default Banner