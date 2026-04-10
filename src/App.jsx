import Teoria from "./componentes/Teoria";

function App() {
  const comision = 23
  const modulo = 'modulo 2'
  return (
    <main className="container my-3">
      <h1 className="text-center">Hola mundo con React</h1>
      <Teoria comisionProps = {comision} moduloProps = {modulo}/>
      
    </main>
  );
}


export default App;
