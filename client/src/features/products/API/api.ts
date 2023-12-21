/* eslint-disable import/prefer-default-export */
import type { Category } from '../../categories/types/Category';
import type { Product } from '../types/Product';

export const fetchLoadAllProducts = async (id: Category['id']): Promise<Product[]> => {
  console.log(id, 'THIS IS ID');
  const response = await fetch(`/api/category/getAll/${id}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();
  console.log(data.products[0].Products, 'OTVET SERVERA');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return data.products[0].Products;
};

export const fetchLoadProducts = async (
  id: Category['id'],
  page = 1,
  pageSize = 5,
  sortBy: string | null = null,
  sortOrder: 'ASC' | 'DESC' = 'ASC',
): Promise<Product[]> => {
  const sortParams = sortBy ? `&sortBy=${sortBy}&sortOrder=${sortOrder}` : '';
  const response = await fetch(
    `/api/category/${id}?page=${page}&pageSize=${pageSize}${sortParams}`,
  );
  const data = await response.json();
  return data.products;
};


