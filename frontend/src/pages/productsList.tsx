import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import Pagination from '../components/pagination';
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';

const ProductsList = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { products, totalPages, loading, error } = useProducts(page, limit);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center">
          <p className="text-red-500 bg-red-100 p-4 rounded-md shadow-sm">
            {error}
          </p>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};


export default ProductsList;