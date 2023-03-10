import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboards/Dashboard'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='App flex '>
      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/create' element={<Create />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
