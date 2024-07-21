// Componente inicial/Portada
import { useNavigate } from 'react-router-dom'

const Portada = () => {
  const navegacion = useNavigate();
  return (
    <>
      <h1>BIENVENIDO/A</h1>
      <button className='boton' onClick={() => navegacion("/juego")}>Jugar</button>
    </>
  )
}

export default Portada