import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rootlayout from './rootlayouts/Rootlayout'
import Home from './page/Home'
import About from "./page/About"
import Blog from "./page/Blog"
import Contact from './page/Contact'
import Course from './page/Course'
import Pages from './page/Pages'
import Shop from './page/Shop'
import Teacher from './page/Teacher'
import Gallary from './page/Gallary'
import Login from './page/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Rootlayout/>}> 
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/page' element={<Pages/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/teacher' element={<Teacher/>}/>
          <Route path='/gallary' element={<Gallary/>}/>
          <Route path='/login' element={<Login/>}/>
          
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
