import React, {useState} from 'react'
import axios from 'axios'

const courses = [

        {
            "id": 1,
        "image" : "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
        "title" : "Java Script desde Cero",
        "teacher": "Allan Castro",
        "price" : 60,
        "description" : "Domina el mundo de JavaScript en tiempo record"
        },
        
        {
            "id": 2,
            "image" : "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
        "title" : "Html Desde Cero",
        "teacher": "Paola Diaz",
        "price" : 20,
        "description" : "Domina el mundo de Html 5 en tiempo record"
        },
        
        {    
            "id": 3,
        "image" : "https://edteam-media.s3.amazonaws.com/courses/small/084a20f8-e327-47ce-a073-1df1f90e4a74.jpg",
        "title" : "Responsive Web Apps",
        "teacher": "Karol cacerers",
        "price" : 50,
        "description" : "Domina las responsive Web Aps en tiempo record"
        },
        {  
        
            "id": 4,
            "image" : "https://edteam-media.s3.amazonaws.com/courses/small/262e68b3-eea2-43f2-9e9a-febc106a8295.png",
        "title" : "Css desde Cero",
        "teacher": "Alvaro Felipe",
        "price" : 30,
        "description" : "Domina el mundo de Css en tiempo record"
        }
        
]




const Course = (match) => {

  
const CursoActual = courses.filter( course => course.id === parseInt(match.params.id))[0]/*El filter me sirve para filtrar el coontenido pero dependiendo de una condicion y el mathc me sirve pafra extraer los parametros de una url*/    
  
return (
<div className="l-section s-py-4">
    <div className="ed-grid lg-grid-2">
    {
    CursoActual? (
      <>
        <h1 className="lg-cols-1">{CursoActual.titulo}</h1>
<img className="lg-cols-3" src={CursoActual.imagen}alt={CursoActual.titulo} />
<p className="lg-cols-3">Maestro: {CursoActual.maestro}</p>
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




export default Course



