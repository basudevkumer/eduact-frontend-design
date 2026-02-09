import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Rootlayout from './rootlayouts/Rootlayout'
import Home from './page/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Rootlayout/>}> 
          <Route index element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App