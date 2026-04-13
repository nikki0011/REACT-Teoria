import { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);
  // * aqui va la logica
  // let numero = 0

  // const incrementar = ()=>{
  //    setNumero(numero + 1)
  //     // console.log(numero)
  // }

  return (
    // * html  y un poco de logica
    <section className="border rounder-3 text-center p-3">
      <h2 className="text-center">Contador</h2>
      <p className="lead text-center">{numero}</p>
      <button
        className="btn btn-primary me-3"
        onClick={() => setNumero(numero + 1)}
      >
        +
      </button>
      <button className="btn btn-danger" onClick={() => setNumero(numero - 1)}>-</button>
    </section>
  );
};

export default Contador;
