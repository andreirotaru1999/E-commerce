import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import Pagination from '../components/pagination';
import { Product } from '../types/product';

const ProductsList = () => {
  const [page, setPage] = useState(1);
  const limit = 2;
  

  const { products, totalPages, loading } = useProducts(page, limit);

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product: Product) => (
              <p>{product.name}</p>
            ))}
          </div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};

export default ProductsList;