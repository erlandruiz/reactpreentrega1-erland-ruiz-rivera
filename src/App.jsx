import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import { NavbarBar } from './components/Navbar/NavbarBar';

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Category } from './pages/Category';
import { Nosotros } from './pages/Nosotros';
import { Conocenos } from './pages/Conocenos';
import { Contactanos } from './pages/Contactanos';
import { Ofertas } from './pages/Ofertas';



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element = {<NavbarBar />}>
      <Route path='/' element={<Home />}/>
      <Route path='/item/:id'element={<Details/>}/>
      <Route path='/category/:id' element={<Category/>}/>
      <Route path='/ofertas/:id' element={<Ofertas/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/conocenos' element={<Conocenos/>}/>
      <Route path='/contactanos' element={<Contactanos/>}/>

    </Route>

   
  )
)

function App() {
 

  return (
  
    <div className='app'>

      <RouterProvider router={routes}/>

      
    </div>
  
    
  )
}

export default App
