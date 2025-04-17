import axios from 'axios';
import { Product } from '../types/product';

export const fetchProducts = async (page: number, limit: number): Promise<{
  data: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  const res = await axios.get('http://localhost:5000/products', {
    params: { page, limit },
  });
  console.log(res.data);
  return res.data;
};