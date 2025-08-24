import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./components/homepage";
import ShopCategory from './components/shopCategory/shopCategory';
import Product from './components/shopCategory/product';
import Cart from './components/cart/cart';
import Wishlist from './components/wishlist/wishlist';
import Profile from './components/login/profile';
import Header from './components/header/header';
import { ShopContextProvider } from './context/shopcontext';


function App() {

  return (
    <>
    <div className="app">
    <ShopContextProvider>

      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/men-shop' element={<ShopCategory category='men'/>}/>
            <Route path='/women-shop' element={<ShopCategory category='women'/>}/>
            <Route path='/kids-shop' element={<ShopCategory category='kids'/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </ShopContextProvider>

    </div>
    </>
  )
}

export default App
