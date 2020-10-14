import React ,{Component} from 'react'
                //primero recicbira las props para que sea dinamico y despues el componente envuelo
const withLoader = (propsValue) => (WrappedComponent)=>{

    //retornara otro componente de tipo clase y eso en Un HOC, una funcion que recibe un componente y depsueys retorna otro componente nuevo despues de aplicarle la funcion y alla arriba no tengo que especificarle el tipo de dato.
return class withLoader extends Component{
constructor(props) {
    super(props)
}

render(){

//ya que asi tambien se puede acceder a las propiedades de un componente
return this.props[propsValue].length ===0 ?
<h1 className="t1">Cargando....</h1> //si no hay nada me retornara el cargando y si hay contenido me retornara el componente tal y como esta 
:<WrappedComponent {...this.props}/>//aca estiy retornando el componente tal y como venia en el llamado a la funcion

}

}

} 

export default withLoader

