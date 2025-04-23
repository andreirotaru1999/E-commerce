import { Routes, Route } from 'react-router-dom';
import ProductsList from './pages/productsList';
import Home from './pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;