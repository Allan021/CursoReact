import React,{Component},{useState} from 'react'
import axios from 'axios'

class Course extends Component {

    constructor(props){
        super(props)
this.state={/*
    El match viene por propiedades por lo que el me obtiene los parametros de cada uno de lo cursos*/    CursoActual : {}/*Esto es un objeto porque aqui solo impirmire un elemento a la vez y no impirmire la grilla de cursos sino un solo elemento*/
}
    }
    componentDidMount(){
        axios.get(`http://my-json-server.typicode.com/Allan021/JSONDB/cursos/${this.state.match.params.id}`)
        .then(response => this.setState({
            CursoActual : response.data
        }))
    
        }
    
  render(){  
return (
<div className="l-section s-py-4">
    <div className="ed-grid lg-grid-2">
    {
    this.state.CursoActual? (
      <>
        <h1 className="lg-cols-1">{this.CursoActual.titulo}</h1>
<img className="lg-cols-3" src={this.CursoActual.imagen}alt={this.CursoActual.titulo} />
<p className="lg-cols-3">Maestro: {this.CursoActual.maestro}</p>
</>

    ) : (
        <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
        </div>
    )

    
    }
</div>
</div>
)

}
}

export default Course



