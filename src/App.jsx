import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
