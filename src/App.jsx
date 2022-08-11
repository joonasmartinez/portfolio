import { useState } from 'react'
import Global from "./GlobalStyles";
import { Home } from './componentes/home';
import { About } from './componentes/about';
import { Portfolio } from './componentes/portoflio';
import { NavBar } from './componentes/navbar';
import { Contato } from './componentes/contato';

function App() {

  const [dark, setDark] = useState(true);

  return (
    <div className="App">
    <NavBar Dark={dark}/>
    <Home />
      {/* <button onClick={()=>{setDark(!dark)}}>Tema dark</button> */}
    <About />
    <Portfolio />
    <Contato />
    <Global/>
    </div>
  )
}

export default App
