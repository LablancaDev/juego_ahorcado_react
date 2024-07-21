// Pantalla final cuando alguien pierda
import React, { useContext } from 'react'
import Contexto from '../contexto/Contexto';
import img6 from "../assets/el_ahorcado6.png";
import { useNavigate } from 'react-router-dom';

const Final = () => {

  const { laCorrecta } = useContext(Contexto)
  const navegacion = useNavigate();

  return (
    <>
      <h1 className='fallo'>Vaya, respuesta incorrecta !!!</h1>
      <h2>La respuesta correcta era: <strong>{laCorrecta}</strong> </h2>
      <div className='imagen'>
        <img src={img6} alt="imagen_final" />
      </div>
      <button className='boton' onClick={() => navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Final