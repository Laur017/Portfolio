import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'

type Pages = 1 | 2 | 3 | 4;

function App() {
  const [page, setPage] = useState<Pages>(1)

  const handlePage = (n:Pages) =>{
    setPage(n)
  }
  return (
    <div className='flex w-[100%] flex-col justify-center items-center app-div'>
      <Navbar handlePage={handlePage} page={page}/>

      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
