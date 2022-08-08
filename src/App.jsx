import { useState } from 'react'
import Global from "./GlobalStyles";
import { NavBar } from './componentes/navbar'
import { Home } from './componentes/home';

function App() {

  return (
    <div className="App">
    <Home/>
    <Global/>
    </div>
  )
}

export default App
