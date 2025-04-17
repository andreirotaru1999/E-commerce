import { Routes, Route } from 'react-router-dom';
import ProductsList from './pages/productsList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/product" element={<ProductsList />} />
    </Routes>
  );
};

export default AppRoutes;