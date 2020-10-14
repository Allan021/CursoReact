import React, { Component } from "react"


const withLoaderP = (propValue) => (WrappedComponent) => {

  return class withLoaderP extends Component{


constructor(props) {
    super(props)
}

render(){

return this.props[propValue] ? <h1 className="t1">Cargando....</h1>  
: <WrappedComponent {...this.props} /> //Me va a retornar el mismo componente  
  }

    }



}


export default withLoaderP