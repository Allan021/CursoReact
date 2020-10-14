import React from 'react'
import withLoader from '../HOC/withLoader'
import CourseCard from '../Molecules/CourseCard'

//aca recibire el array de cursos como atributos
const CourseGrid = ({courses}) => (

        <div className="l-section s-py-4">
        <div className="ed-grid s-grid-3">
          {
        courses.map(curso => <CourseCard 
            id = {curso.id}//aca le estoy enviando las propiedades o las propes que me pedia y ademas con el bonus que lo hice con un arreglo de objetos y con un maop y cada uno de los objetos de ese arreglo me retornaba un componente react con esas caracteristicas
            image= {curso.image}
            title = {curso.title}
            description = {curso.description}
            teacher = {curso.teacher}
            price = {curso.price}
            />)
            
        
        }
          </div>
          </div>
            

)

export default withLoader("courses")(CourseGrid) //Hizo la importacuion automaticaaaamentey en el segundo parametro le envio el componente y en el primero todas las props que necesitaba en la logica