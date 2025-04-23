import axios from 'axios';
import { Product } from '../types/product';

export const fetchProducts = async (page: number, limit: number): Promise<{
  data: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  try {
  const res = await axios.get('http://localhost:5000/products', {
    params: { page, limit },
  });
  return res.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Could not fetch products. Please try again later.');
  }
};