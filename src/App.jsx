import { useState } from 'react'
import Global from "./GlobalStyles";
import { Home } from './componentes/home';
import { About } from './componentes/about';
import { Portfolio } from './componentes/portoflio';
import { NavBar } from './componentes/navbar';
import { Contato } from './componentes/contato';

function App() {


  return (
    <div className="App">
    <NavBar/>
    <Home />
    <About />
    <Portfolio />
    <Contato />
    <Global/>
    </div>
  )
}

export default App
