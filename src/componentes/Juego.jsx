// Juego principal, una vez le doy click a jugar cambio me redirige al componente Jugar mediante las rutas
import { useContext, useEffect, useState } from "react";
import Contexto from "../contexto/Contexto";
import { PALABROS } from "../assets/palabros"
import { useNavigate } from "react-router-dom";
import img1 from "../assets/el_ahorcado1.png";
import img2 from "../assets/el_ahorcado2.png";
import img3 from "../assets/el_ahorcado3.png";
import img4 from "../assets/el_ahorcado4.png";
import img5 from "../assets/el_ahorcado5.png";
import img6 from "../assets/el_ahorcado6.png";

const images = [img1, img2, img3, img4, img5, img6];

const Juego = () => {

  const navegacion = useNavigate();

  const { escribirCorrecta } = useContext(Contexto)

  const [azar, setAzar] = useState(0);

  const [palabra, setPalabra] = useState([]);

  const [misLetras, setmisLetras] = useState([]);

  const [correctas, setCorrectas] = useState([]);

  const [erroneas, setErroneas] = useState([]);

  const [imagen, setImagen] = useState(1);

  const letras = "ABCDEFGHIJKLMNÑOPQRSTUWXYZ";

  const letras_array = letras.split("")
  console.log(letras_array)

  const misColores = [{ backgroundColor: "white" }, { backgroundColor: "green", color: "white" }, { backgroundColor: "red", color: "white" }];


  useEffect(() => {
    setAzar(Math.floor(Math.random() * PALABROS.length));
  }, [])

  useEffect(() => {

    setPalabra(PALABROS[azar].palabro.split(""))
    escribirCorrecta(PALABROS[azar].palabro)
  }, [azar])

  const pulsado = (e) => {
    const letra = e.target.innerHTML
    console.log(letra)

    setmisLetras([...misLetras, letra]);

    if (palabra.indexOf(letra) >= 0) {

      setCorrectas([...correctas, letra])
    } else {
      setErroneas([...erroneas, letra])

      setImagen(imagen + 1);

      if (imagen > 5) {

        navegacion("/final");
      }
    }
  }


  useEffect(() => {
    let noEncontrado = 0;
    palabra.map(p => {
      if (misLetras.find(e => e === p) === undefined) {
        noEncontrado++;
      }
    })

    if (noEncontrado === 0 && correctas.length > 0) {

      navegacion("/ganado")
    }
  }, [correctas])

  return (
    <>
      <h1 className="pregunta">
        ¿ {PALABROS[azar].pregunta}
      </h1>
      <div className="palabra">
        {
          palabra.map((letra, i) => (
            misLetras.indexOf(letra) === -1
              ?
              <div className="palo" key={i}></div>
              :
              <div className="palo" key={i}>{letra.toUpperCase()}</div>
          ))
        }
      </div>
      <div className="botones">

        {

          letras_array.map((letra) => (
            (correctas.find(e => e === letra))
              ?
              <button style={misColores[1]} key={letra}>{letra}</button>
              :
              (erroneas.find(e => e === letra))
                ?
                <button style={misColores[2]} key={letra}>{letra}</button>
                :
                <button style={misColores[0]} onClick={pulsado} key={letra}>{letra}</button>

          ))
        }
      </div>

      <div className="imagen">
        <img
          src={images[imagen - 1]}
          alt={`Ahorcado ${imagen}`}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

    </>
  )
}

export default Juego