import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './pages/dashboards/Dashboard'
import './App.css'
import NavComponent from './components/nav/NavComponent'

function App() {
  return (
    <div className='h-full w-full flex justify-center'>
      <BrowserRouter>
      <NavComponent/>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="*" element={<Navigate to="/Dashboard" />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
