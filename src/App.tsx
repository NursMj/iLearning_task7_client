import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/Header"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import GamePage from "./pages/GamePage"

function App() {
  const [isLogedIn, setIsLogedIn] = useState(localStorage.getItem('userName'))

  return (
    <div className="mb-5">
      <BrowserRouter>
        <Header isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
        <Routes>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/game' element={<GamePage />}/>
          <Route path="/" element={<LoginPage setIsLogedIn={setIsLogedIn} />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
