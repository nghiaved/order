import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/scss/index.scss'
import Read from './pages/Read'
import Create from './pages/Create'
import Update from './pages/Update'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
