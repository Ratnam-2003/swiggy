import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Applayout from './layouts/Applayout'
import Search from './pages/Search'
import Home from './pages/Home'
import RestoPage from './pages/RestoPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Applayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='Search' element={<Search/>}></Route>
        <Route path='resto/:id' element={<RestoPage/>}></Route>

        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
