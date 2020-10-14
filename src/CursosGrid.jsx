import React from 'react';
import Cursos from './cursos'//importando los cursos para imprimirlos en pantalla


const cursos = [
    {
        "id": 1,
    "imagen" : "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
    "titulo" : "Java Script desde Cero",
    "maestro": "Allan Castro",
    "precio" : 60,
    "descripcion" : "Domina el mundo de JavaScript en tiempo record"
    },//Este retorna un componente
    
    {
        "id": 2,
        "imagen" : "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "titulo" : "Html Desde Cero",
    "maestro": "Paola Diaz",
    "precio" : 20,
    "descripcion" : "Domina el mundo de Html 5 en tiempo record"
    },//Este retorna otro componente
    
    {    
        "id": 3,
    "imagen" : "https://edteam-media.s3.amazonaws.com/courses/small/084a20f8-e327-47ce-a073-1df1f90e4a74.jpg",
    "titulo" : "Responsive Web Apps",
    "maestro": "Karol cacerers",
    "precio" : 50,
    "descripcion" : "Domina las responsive Web Aps en tiempo record"
    },
    {  
    
        "id": 4,
        "imagen" : "https://edteam-media.s3.amazonaws.com/courses/small/262e68b3-eea2-43f2-9e9a-febc106a8295.png",
    "titulo" : "Css desde Cero",
    "maestro": "Alvaro Felipe",
    "precio" : 30,
    "descripcion" : "Domina el mundo de Css en tiempo record"
    }//creando un areglo de objetos para que sea mas dinamico
    ]
    

const Grilla = () => (


<div class="ed-grid s-grid-3">
  {cursos.map(curso => <Cursos 
  id = {curso.id}//aca le estoy enviando las propiedades o las propes que me pedia y ademas con el bonus que lo hice con un arreglo de objetos y con un maop y cada uno de los objetos de ese arreglo me retornaba un componente react con esas caracteristicas
  imagen= {curso.imagen}
  titulo = {curso.titulo}
  descripcion = {curso.descripcion}
  maestro = {curso.maestro}
  />)}
  </div>
)
//este sera el componente que me va a retornar este componente y resuminre mucho las lineas de codigo

export default Grilla;//asi voy limmpiando mucho mas el codigo de mi aplicacion