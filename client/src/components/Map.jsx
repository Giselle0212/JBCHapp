import React from 'react'
import { Link } from 'react-router-dom'
import Mapa from "../images/IMG_3494.jpg"
import Horario from '../images/IMG_3495.jpg'


const Map = () => {
  return (
    <div>
      <div>
        <Link to="/home">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px", padding: "25px" }} viewBox="0 0 448 512">
            <path fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
      </div>
      <div className='infoContainer'>
        <div className='tittleInfoContainer'>
          <div>
          <p className='infoTittle'>Informacion Sobre El Retiro</p>
          </div>
          <div className='verseFont'>
          <p>"Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios."</p>
          <p>Juan 3:3</p>
          </div>
        </div>
        <div>
          <h2>Horario</h2>
          <img src={Horario} alt="" style={{ width: "400px", height: "300px" }} />
        </div>
        <div>
          <h2>Mapa</h2>
          <img src={Mapa} alt="" style={{ width: "400px", height: "300px" }} />
        </div>
      </div>
    </div>
  )
}

export default Map