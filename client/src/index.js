import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/scss/index.scss'
import Layout from './components/Layout'
import Read from './pages/Read'
import Create from './pages/Create'
import Update from './pages/Update'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)
