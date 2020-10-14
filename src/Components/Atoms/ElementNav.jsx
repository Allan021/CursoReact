import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const ElementNav = ({name,url})=>(

<li className="lg-mr-3">
        <NavLink exact activeClassName="Hola" className="link s-column s-cross-center" to={url}>
          <svg className="icon to-lg s-mb-0">
            <use href="#home"></use>
          </svg>
          <span>{name}</span>
        </NavLink>
</li>
)

ElementNav.propTypes = {
name : PropTypes.string,
url: PropTypes.string
}
ElementNav.defaultProps = {
name: "Sin recibir" ,
url: 'No encontrada'  
}


export default ElementNav