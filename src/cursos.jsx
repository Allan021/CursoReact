import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'//aca necesito importar esta clase para definir mis props por defecto y el topo de dato que espero
//Para que este componente sea dinamico yo debo utilizar las props y ademas lo estoy deestructurando para usar solo lo que necesito
const CursosEdTeam = ({imagen,titulo,descripcion,maestro,precio,id}) => (
//Lo que esta dentor de este conteido sera lo que retornar el componete presentacional o tonos xd y para cambiar las cosas que pueden estar quemadas se 



<article class="s-shadow-bottom">
    
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <Link to={`/curso/${id}`}>
        <img src={imagen} alt={titulo}/>
        </Link>
    </div>
   
    <div class="s-bg-white s-pxy-2">
<h3>{titulo}</h3>
<p class="s-mb-0">{descripcion}</p>
    </div>
    <footer class="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
       
        <div class="s-10 s-mr-1">
       
        <div class="circle ">
            <img  src="/assets/img/alexys.jpg " alt={titulo} />
        </div>
        
        </div>
<p class="s-mb-0">{maestro}</p>
      
<div class="button s-to-right">{precio} USD</div>
    </footer>
</article>




)

CursosEdTeam.propTypes = {
imagen: PropTypes.string,//estoy diciendo que de la prop imagen espero un tring
titulo: PropTypes.string,
descripcion: PropTypes.string,
maestro: PropTypes.string,
precio: PropTypes.number//aca digo que estoy esperando un numero
}//y estas se colocan dentro de un objeto ya que esto es una clase

//aca estoy diciendo que voy a definir mis propiedades por defecto
CursosEdTeam.defaultProps = {
imagen: "https://www.cofregrafico.com/wp-content/uploads/2010/10/ciudad-blanco-negro-1.jpg",//si no me mandan la imagen esto se va a mostrar
titulo: "No hay titulo",
descripcion: "No hay descripcion",
maestro: "No hay teacher",
precion: "__"//todo esto es siemore y cuando haga falta una prop
}

export default CursosEdTeam//aca estoy exportando este componente para que sea utilizado dentro de la aplicacion












