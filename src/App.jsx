import React from 'react'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from './components/GamePage/GamePage'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PlayGame" element={<GamePage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App