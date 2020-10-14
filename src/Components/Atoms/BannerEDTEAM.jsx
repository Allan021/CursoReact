import React from "react"
import withLoaderP from "../HOC/withLoaderP"

const BannerEDteam = ({alt,Urlimage})=> (

<img alt={alt} className="s-radius-1" src={Urlimage} />

)

export default withLoaderP("https://ed-grid.com/assets/img/og-image.jpg")(BannerEDteam)
//aca hago 2 llamadas a la funcion y en la primera van con los custom y los segundos son los componentes


