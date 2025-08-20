import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Applayout from './layouts/Applayout'
import Search from './pages/Search'
import Home from './pages/Home'
import RestoPage from './pages/RestoPage'
import Cart from './pages/Cart'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  console.log(store)
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Applayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='search' element={<Search/>}></Route>
        <Route path='resto/:id' element={<RestoPage/>}></Route>
         <Route path='cart' element={<Cart/>}></Route>

        </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
