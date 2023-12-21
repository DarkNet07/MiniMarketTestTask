/* eslint-disable import/prefer-default-export */
import type { Category } from '../types/Category';

export const fetchLoadCaegories = async (): Promise<Category[]> => {
  const response = await fetch(`/api/category/`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return data.categories;
};
