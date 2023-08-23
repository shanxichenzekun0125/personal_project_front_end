import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import NewTransactionPage from './components/NewTransactionPage'
import ViewHistoryPage from './components/ViewHistoryPage'
import MonthlySummaryPage from './components/MonthlySummaryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginPage/> */}
      {/* <HomePage/> */}
      {/* <NewTransactionPage /> */}
      {/* <ViewHistoryPage /> */}
      <MonthlySummaryPage />
    </>
  )
}

export default App
