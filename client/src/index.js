import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './scss/index.scss'
import Admin from './pages/Admin'
import Create from './pages/Create'
import Update from './pages/Update'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Staff from './pages/Staff'
import Kitchen from './pages/Kitchen'
import Login from './pages/Login'
import Register from './pages/Register'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          {/* Các đường dẫn tới giao diện */}
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
          <Route path='/admin' element={localStorage.getItem('admin') === 'admin' ? <>
            <header>
              <h1>App order</h1>
              <span onClick={() => {
                localStorage.removeItem('admin')
                window.location.reload()
              }}>
                admin : logout
              </span>
            </header>
            <Admin />
          </> : <Login />} />
          <Route path='/staff' element={localStorage.getItem('staff') === 'staff' ? <>
            <header>
              <h1>App order</h1>
              <span onClick={() => {
                localStorage.removeItem('staff')
                window.location.reload()
              }}>
                staff : logout
              </span>
            </header>
            <Staff />
          </> : <Login />} />
          <Route path='/kitchen' element={localStorage.getItem('kitchen') === 'kitchen' ? <>
            <header>
              <h1>App order</h1>
              <span onClick={() => {
                localStorage.removeItem('kitchen')
                window.location.reload()
              }}>
                kitchen : logout
              </span>
            </header>
            <Kitchen />
          </> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/order' element={<Order />} />
          <Route path='/' element={<Menu />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
