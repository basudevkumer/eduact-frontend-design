import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rootlayout from './rootlayouts/Rootlayout'
import Home from './page/Home'
import About from './page/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
