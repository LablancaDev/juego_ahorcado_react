/* Usaremos el contexto para que todos los componentes puedan compartir información, por ejemplo cuando se falle 
una pregunta y el juego vaya al final, el final sepa cual era la respuesta correcta para mostrarsela al usuario div*/

import { createContext } from "react";

const Contexto = createContext();

export default Contexto