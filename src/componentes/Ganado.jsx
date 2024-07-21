// Pantalla cuando alguien gane

import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from "../assets/el_ahorcado1.png";

const Ganado = () => {

  const navegacion = useNavigate();

  return (
    <>
      <h1 className='respuesta'>Muy bien, has ganado el juego !!! </h1>
      <div className='imagen'>
        <img src={img1} alt="imagen_inicio" />
      </div>
      <button className='boton' onClick={() => navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Ganado