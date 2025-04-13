import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
       {/* <Main /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  )
}

export default App
