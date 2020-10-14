import React , {Component} from 'react'
import UserGrid from '../Organisms/UserGrid'
import axios from 'axios'


class Users extends Component{

constructor(props){
super(props)

this.state = {
    users: []//yo quero segui el estado de un arreglo vacio y como no puedo actualizar el estado aqui en tonces lo dejo vacio y despues lo destructuro
}

}



render(){
//estoy descomponiendo el estadoooo o sea que asi puedo destructurar los elemento que esten siendo seguidos por el estado
//Aca estoy destrucurando el arreglo que declar arriba del objeto y ademas ese arreglo de objetos sera el que le pasare como props a cadaa uno de las course card
//Tene cuidado con el nombre que le pones a las propiedads en tu estado ya que deben ser iguales en todos lados

const {users} = this.state//este array de usuarios se lo puedo pasar como props para que en otro componente se utilice y asi limpiar los errores que tengo

return <UserGrid users={users}/>



}



componentDidMount(){

axios.get("http://my-json-server.typicode.com/Allan021/Json_Database/usuarios")
.then(respuesta => this.setState({
    users: respuesta.data
}))

}
}


export default Users