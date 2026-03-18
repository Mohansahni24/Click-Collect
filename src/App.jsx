import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ProductsPage from './pages/ProductsPage';
import Clothing from './pages/Clothing';
import Accessories from './pages/Accessories';
import Electronics from './pages/Electronics';
import ProductDetailPage from './pages/ProductDetailPage';
import Book from './pages/Book';
import ToysAndGames from './pages/ToysAndGames';
import WishlistPage from './features/wishlist/WishlistPage'
import Address from './features/address/Address';
import OrderConfirmation from './features/orders/OrderConfirmation';
import MyOrder from './features/orders/MyOrder';
import HotDeals from './pages/HotDeals';
import Furniture from './pages/Furniture';


// import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './features/cart/CartPage';
function App() {
  return (
    <Router>
      <Navbar />
      <div className='main-content-wrp'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path={"/product/:id"} element={<ProductDetailPage />} />
          <Route path="/wishList" element={<WishlistPage/>}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/clothing"  element={<Clothing />} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/books" element={<Book/>} />
          <Route path="/toys-games" element={<ToysAndGames/>} />
          <Route path="/address" element={<Address />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/my-orders" element={<MyOrder />} />
          <Route path="/furniture" element={<Furniture />}/>
          <Route path="/login" element={<div className="container py-12">Login Page (Coming Soon)</div>} />
          <Route path="*" element={<div className="container py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <a href="/" className="btn-primary px-6 py-3 rounded-lg inline-block">Go Home</a>
          </div>} />


        </Routes>
      </div>

      <Footer />
    </Router>
  )
}


export default App;

