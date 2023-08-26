import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cataloge from "./pages/Cataloge/Cataloge";
import Room from "./pages/Room/Room";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import './styles/style.scss'
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
import CheckOut from "./pages/CheckOut/CheckOut";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cataloge' element={<Cataloge/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>

        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </>
  )
}

export default App
