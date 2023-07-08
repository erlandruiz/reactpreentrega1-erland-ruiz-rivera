import { useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {  NavbarBar } from './components/navbar/Navbar'
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>

      {/* Se agrega en navbar el cartwidget */}
      <NavbarBar/>

    {/* Enviamos el saludo */}
      <ItemListContainer greeting={'Saludos de parte del equipo de protección personal'}/>
      
      
      
    </div>
    
      
    </>
  )
}

export default App
