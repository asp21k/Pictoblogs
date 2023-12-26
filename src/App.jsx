import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Navbar />  
      <p className="text-center text-purple-700 text-2xl"> Hi there! </p>  
      </>
  )
}

export default App
