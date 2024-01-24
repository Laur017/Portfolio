import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { useState } from 'react'

type Pages = 1 | 2 | 3 | 4;

function App() {
  const [page, setPage] = useState<Pages>(1)

  const handlePage = (n:Pages) =>{
    setPage(n)
  }
  return (
    <div className='flex w-[100%] flex-col justify-center items-center h-[100vh]'>
      <Navbar handlePage={handlePage} page={page}/>
      <Home />
    </div>
  )
}

export default App
