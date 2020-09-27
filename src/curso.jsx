import  React from 'react';//importando el componente padre de react


//esta variable curos seria un componente jsx y todos mis componentes llevaran la extension 
const Curso = ()=> (
<div className="s-shadow-bottom">
    
    <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <img src="https://ed-grid.com/assets/img/poster-curso.png" alt="Imagen del curso"/>
    </div>
    
    <div className="s-bg-white s-pxy-2">
        <h3>Curso Bases de Datos Desde Cero</h3>
        <p className="s-mb-0">Diseña, estructura y administra bases de datos SQL y crea un sistema de facturación</p>
    </div>
    <div className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
      
        <div className="s-10 s-mr-1">
        
        <div className="circle ">
            <img  src="https://ed-grid.com/assets/img/alexys.jpg" alt="Imagen del tio alexis"/>
        </div>
        
        </div>
        <p className="s-mb-0">Prof. Alexys Lozada</p>
       
        <div className="button s-to-right">$40USD</div>
    </div>
</div>

);

export default Curso;//aca estoy exportando este componente jsx y solo puedo exportar un componente por pagina
