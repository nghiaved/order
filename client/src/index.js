import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/scss/index.scss'
import Layout from './components/Layout'
import Admin from './pages/Admin'
import Create from './pages/Create'
import Update from './pages/Update'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Staff from './pages/Staff'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Các đường dẫn tới giao diện */}
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/order' element={<Order />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/' element={<Menu />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)
