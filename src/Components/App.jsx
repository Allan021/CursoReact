import  React from 'react';
import '../styles/styles.scss';
import Courses from './Pages/Courses'//al ser una pagina debo importarlo desde el directorio de Paginas
import Form from './Pages/Form'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Course from './Pages/Course'//esras si son paginas aparte
import MainMenu from './Templates/MainMenu'
import History from './Pages/History'
import Home from '../Components/Organisms/Home'
import Users from '../Components/Pages/Users'//par asignarle una url con el route

//importando este componente formulario que sera de tipo clase
//esta es una funcion flecha que me va a retornar algo
//lo que le pongo a los componentes se llaman propiedades y no se llaman atributos sino propiedades
//Desde ahora en adealante debes encerrar tus componentes con route y cada uno de tus componentes lo pone dentro de route
//el switch es para que se pueda usar el Default de mejor manera 

//aca estoy destrurando todo el arreglo de objetos y esta es la posicion 1


const App = ()=> (//bueno no me dejaron crear el codigo pero lo que iba a escribir era basicamente que no necesito poner los divs ya que dentro el componente curso ya exite ese componente de react
//El router es el emcargado de administrar todas las rutas dentro de mi aplicacion y ademas toda mi aplicacion ira dentro del router ya que el se encargara de adminitrar mis ruta

//El swhitch se encarga de cada route y el que no tenga path lo tomara por default y se imprimira si es que no hay uno
//Por defecto se imprimira el baner dentro de mi app
<Router>
<Route component={MainMenu} />
<Switch>

<Route path="./history" component= {History} />       
<Route path='/' exact component= { Home}/> 
<Route path="/curso/:id" component ={Course} />
<Route path='/users' component={Users}/>
<Route path="/cursos" component = {Courses} />
<Route path="/formulario" component = { ()=> (<Form nombre="Ed team"/>)} />


<Route component= { ()=>(
<div className="ed-grid">
<h1>Error 404</h1>
<span>No se ha encontrado esa pagina</span>
</div>

)}/>
</Switch>
</Router>



);
export default App;//esto es para exportar el componente que acabo de crear
//este es para exportar los componentes y defauit es que sera el principal
