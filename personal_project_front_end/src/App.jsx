import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import NewTransactionPage from './components/NewTransactionPage'
import ViewHistoryPage from './components/ViewHistoryPage'
import MonthlySummaryPage from './components/MonthlySummaryPage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/new" element={<NewTransactionPage/>}/>
          <Route path="/history" element={<ViewHistoryPage/>}/>
          <Route path="/report" element={<MonthlySummaryPage/>}/>
        </Routes>

      </div>
      
      {/* <Navbar/> */}
    
      {/* <HomePage/> */}
      {/* <NewTransactionPage/> */}
      {/* <ViewHistoryPage/> */}
      {/* <MonthlySummaryPage/>  */}
    </>
  )
}

export default App
