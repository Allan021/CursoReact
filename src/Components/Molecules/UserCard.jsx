import React from 'react'
import propTypes from 'prop-types'
//Este sera el componente que retornar en el componente de lcase
const UserCard = ({name,username,email}) => (


<article className="s-shadow-bottom">
    
    
    <div className="s-bg-white s-pxy-2">
<h3>{name}</h3>
<p class="s-mb-0">{username}</p>
    </div>
    <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
       
<p className="s-mb-0">{email}</p>
      
    </footer>

</article>
)

UserCard.propTypes = {
    name: propTypes.string,
    username: propTypes.string,
    email: propTypes.string
}

UserCard.defaulProps = {
    name: 'Sin nombre',
    email: 'Sin email',
    username: 'No existe'
}

export default UserCard