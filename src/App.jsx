import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rootlayout from './rootlayouts/Rootlayout'
import Home from './page/Home'
import About from "./page/About"
import Blog from "./page/Blog"
import Contact from './page/Contact'
import Course from './page/Course'
import Pages from './page/Pages'
import Shop from './page/Shop'
import Courses from './page/Courses'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootlayout from "./rootlayouts/Rootlayout";
import Home from "./page/Home";
import About from "./page/About";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Course from "./page/Course";
import Shop from "./page/Shop";
import Cart from "./component/addToCart/Cart";
import Product from "./component/shop/Product";
import Product_detailes from "./component/shop/Product_detailes";
import Teacher from "./page/Teacher";
import Gallary from "./page/GallaryP";
import Login from "./page/Login";
import CheckoutPg from "./page/CheckoutPg";

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
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/page' element={<Pages/>}/>
          <Route path='/shop' element={<Shop/>}/>
          
      </Route>
    </Routes>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPg />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product_detailes" element={<Product_detailes />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
