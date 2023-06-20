import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AllSalesPage from "./pages/AllSalesPage";
import AllProductsPage from "./pages/AllProductsPage";
import NavMenu from './components/NavMenu';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import ProductDescrPage from "./pages/ProductDescrPage";
import ProductByCategoriesPage from './pages/ProductByCategoriesPage';

function App() {

  return (
    <div>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/AllSales' element={<AllSalesPage/>}/>
        <Route path='/AllProducts'element={<AllProductsPage/>}/>
        <Route path='/CategoriesPage' element={<CategoriesPage/>}/>
        <Route path='/categories/:category' element={<ProductByCategoriesPage/>}/>
        <Route path='/cartPage' element={<CartPage/>}/>
        <Route path='/AllProducts/products/:id' element={<ProductDescrPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
