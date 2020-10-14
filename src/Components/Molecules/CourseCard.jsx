import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'//aca necesito importar esta clase para definir mis props por defecto y el topo de dato que espero
//Para que este componente sea dinamico yo debo utilizar las props y ademas lo estoy deestructurando para usar solo lo que necesito

const CourseCard = ({image,title,description,teacher,price,id}) => (
//Lo que esta dentor de este conteido sera lo que retornar el componete presentacional o tonos xd y para cambiar las cosas que pueden estar quemadas se 
<article className="s-shadow-bottom">
    
    <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <Link to={`/curso/${id}`} >
        <img src={image} alt={title}  />
        </Link>
    </div>
   
    <div className="s-bg-white s-pxy-2">
<h3>{title}</h3>
<p className="s-mb-0">{description}</p>
    </div>
    <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
       
        <div className="s-10 s-mr-1">
       
        <div className="circle ">
            <img  src="/assets/img/alexys.jpg " alt={title} />
        </div>
        
        </div>
<p className="s-mb-0">{teacher}</p>
      
<div className="button s-to-right">{price} USD</div>
    </footer>
</article>




)

CourseCard.propTypes = {
image: PropTypes.string,//estoy diciendo que de la prop imagen espero un tring
title: PropTypes.string,
description: PropTypes.string,
teacher: PropTypes.string,
price: PropTypes.number//aca digo que estoy esperando un numero
}//y estas se colocan dentro de un objeto ya que esto es una clase

//aca estoy diciendo que voy a definir mis propiedades por defecto
CourseCard.defaultProps = {
image: "https://www.cofregrafico.com/wp-content/uploads/2010/10/ciudad-blanco-negro-1.jpg",//si no me mandan la imagen esto se va a mostrar
title: "No hay titulo",
description: "No hay descripcion",
teacher: "No hay teacher",
price: "__"//todo esto es siemore y cuando haga falta una prop
}

export default CourseCard//aca estoy exportando este componente para que sea utilizado dentro de la aplicacion












