import Contador from "./componentes/Contador";
import Teoria from "./componentes/Teoria";

function App() {
  const comision = 23
  const modulo = 'modulo 2'
  return (
    <main className="container my-3">
      <h1 className="text-center">Hola mundo con React</h1>
      <Teoria comisionProps = {comision} moduloProps = {modulo}/>
     <Contador></Contador>
    </main>
  );
}


export default App;
