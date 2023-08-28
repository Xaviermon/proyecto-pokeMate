import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './view/home/home'
import Login from './view/login/login'
import Ejercicios from './view/ejercicios/ejercicios'
import Profile from './view/profile/profile'
import Registro from './view/registro/registro'
import axios from 'axios'
import CardsPokemon from './componentes/cardsPokemon/cardsPokemon'
import EjercicioDetail from './view/ejercicioDetail/ejercicioDetail'

//axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://proyecto-pokemate-production.up.railway.app/'

function App() {

  return (
    <>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/ejercicios' element={<Ejercicios />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/ejercicioDetail/:id' element={<EjercicioDetail />} />
      <Route path='/SUBIR' element={<CardsPokemon />} />
    </Routes>
    </>
  )
}

export default App
