import { useEffect, useState } from 'react';
import { fetchProducts } from './fetchProducts';
import { Product } from '../types/product';

export const useProducts = (page: number, limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchProducts(page, limit)
      .then((res) => {
        setProducts(res.data);
        setTotalPages(Math.ceil(res.total / limit));
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong.');
      })
      .finally(() => setLoading(false));
  }, [page, limit]);

  return { products, totalPages, loading, error };
};