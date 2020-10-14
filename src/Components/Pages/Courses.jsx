import React,{Component} from 'react';
import CourseGrid from "../Organisms/CourseGrid"
import axios from 'axios'
    
//Aca estoy quemando esta grilla de cursos por lo que tengo uqe actualizarles el estado y esto lo hare con una eticion a la api que acabo de crear
class Courses extends Component{

constructor(props){
    super(props)//jnicializando las props si es que las llego a utilizar

   this.state = {
       courses: []//cursos sera un arrego vacio
   }
}

render() {

    const { courses } = this.state

    return <CourseGrid courses = {courses} />//mandandole la grilla de cursos que obtuve mediante la respuesta y la actualizacion del estado
}

componentDidMount(){

    axios.get("http://my-json-server.typicode.com/Allan021/JSONDB/cursos")
    .then(response => this.setState({
        courses : response.data
    }))

    }
    




} 
//este sera el componente que me va a retornar este componente y resuminre mucho las lineas de codigo

export default Courses;//asi voy limmpiando mucho mas el codigo de mi aplicacion