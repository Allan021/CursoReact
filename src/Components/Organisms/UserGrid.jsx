import React from 'react'
import withLoader from '../HOC/withLoader'

import UserCard from '../Molecules/UserCard'

//cuando se pasan las props como paramentros hay que desconsytrulirlo porque si yo le ponia props en general iba entre parentesis pero cuando ueria ponerle nombre,edad, lo destructuraba ya ue props es un objeto
const UserGrid = ({users}) => (

<div className="ed-grid s-grid-2 m-grid-3 lg-grid-4 rows-gap">
<h1 className="lg-cols-4 m-cols-3 s-cols-2 center lg-py-3">Usuarios</h1>
{users.map(user => <UserCard 
    key={user.id} 
    name={user.name} 
    email={user.email}
    username={user.username}/>/**Aqui no realizare la validacion sino que la realizare en ek componente de orden superior */)
}

</div>




)

export default withLoader("users")(UserGrid)