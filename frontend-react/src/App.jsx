import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AuthProvider from './AuthProvider.jsx'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute.jsx'
import PublicRoute from './PublicRoute.jsx'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
       {/* <Main /> */}
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
            <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
     
    </>
  )
}

export default App
