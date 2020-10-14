//Primero para trabajar con los componentes de tipo clase necesito crear una clase que me retorne un cocmponente y que herede todos los metodos de componente
import React,{Component} from 'react'


class Form extends Component{//aca le digo la clase debe heredar sus metodos de Component que incluye tanto el setState como el State

//Inicializar el constructor para preparar la estructura del componente y la logica que necesitare antes de renderizarlo
constructor(props){
super(props)//aca estoy inicializando las props que me manden en la llamada ak componente o sea que para instanciar el objeto necesito una prop


//Estabeciendo el estado y estos seran los atributos que yo quiero ir actualizando sus valores
//Para establecer el estado de un elemento yo necesito obligatoriamente pasarle un opbjeto como argumento

this.state = {
nombre :"",//Inicialmente no inician valiendo nada
correo: "",
//Vamo a seguir el estado de una fecha
fecha:new Date()/1000//para que me retorne esa fecha en milisegundos
}//el =={ } es la sintaxis basica de los objetos y state no es una funciom
//Crear metodos de la clase para poder resumir mucho el codigo
this.actualizarNombre = this.actualizarNombre.bind(this);//aca estoy bindiando estos metodos que voy a necesitar
this.actualizarCorreo = this.actualizarCorreo.bind(this);//si yo quiero utilizar metodos en los componentes antes debo bienderlos en el constructor para que me reconozca el this del setState
this.actualizarFecha = this.actualizarFecha.bind(this)
}
actualizarFecha(){
    this.setState({
        fecha : new Date()//aca yo estoy logrando actualizar la fecha desde este set state ya que yo no puedo actualizar el estado directamente desde el state ya que por defecto es un estado ficho
    })//Y cada vez que llame a este metodo se actualizara el estado o sea la fecha y para eso era que la iva a poner en el setInterval
}

actualizarNombre(campo){
this.setState({
nombre: campo.target.value
})//al haberlo bindeando ya me lo reconoce absolutamente todo
}

actualizarCorreo(campo){
    this.setState({
        correo: campo.target.value
    })
}


render(){//este metodo render sera el encargado de renderizar mi componente en el  navegador y el return me retornara el contenido del componente

return(
    <div className="l-section s-py-4">
    <div className="ed-grid">
<h1>Formulario de {this.props.nombre}</h1>
<h4>Fecha acutal: {Math.ceil(this.state.fecha/1000)}</h4>
    <form id="formulario" className='ed-grid lg-grid-2'>
        <div className="form__item m-grid-2">
         <label htmlFor="nombre">Nombre completo:</label>
            <input type="text"onChange={this.actualizarNombre}/>
        </div>
        <div className="form__item">
         <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={this.actualizarCorreo} />
        </div>

    
    </form>

<div>
          <h3>{`Hola tu nombre es: ${this.state.nombre}`}</h3>
          <span>{`Tu correo es: ${this.state.correo} `/*Aca basicamnete estiy imprimirendo todos la informacion del estado actua;*/}</span>
</div>

</div>
</div>
//Yo no puedo establecer el estado directamente desde el estado sino que necesito actualizarlo con el et state

)




}

componentDidMount(){//Comprobar Que el componente ya se renderizo
//Aca estoy declarando nuevas variables siempre con el this. ya que son atributos de mi clase
   this.intervalo = setInterval(()=>{//los elementos this son globales y se pueden usar en toda la clase por lo que si quiers utilizar una variable en varias funciones diferenyes de la clase necesiutas declararla como this. y el nombre y si utilizar funciones dentro de una clase debes bindiarlas en el constructir pra usar la palabra this
     this.actualizarFecha();

   },1000)

}//Dentro de este metodo confirmo que el elemento ya se haya renderizado
//Y afuera del metodo render puedo preparar mas metodos para saber si la pagina ya se actualizo
//El orden de los parametro si importa y ademas por l que primero van las propps y despues el state y por utltimo el prevState es el estado anterior de la informacion del componente
componentDidUpdate(prevProps,prevStates){
    console.log(prevStates);//esto me imprime los stados previos que siguen en el componente y para ser mas espe
   //y como se puede observar estoy viendo todos los compoentes que yo seguia su informacion en el estado anterior
    console.log("=================");
}

componentWillUnmount(){//esto se ejecutara despues que todo haya sido desmontado y el componente ya no este seindo usado y asi me evito problemas graves despues
clearInterval(this.intervalo);
}

}


export default Form;