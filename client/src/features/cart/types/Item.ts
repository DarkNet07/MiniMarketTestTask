import type { Product } from '../../products/types/Product';

export type Item = {
  productId: Product['id'];
  quantity: number;
  productName: string;
};
